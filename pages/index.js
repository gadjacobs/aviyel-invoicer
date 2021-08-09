import React, { useEffect, useState } from "react";
import Head from "next/head";
import Dashboard from "../components/dashboard/layout/dashboard";
import Splash from "../components/splashscreen/splash";
import InvoiceService from "../services/invoice.services";
import { ToastContainer } from "react-toastify";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [invoices, setInvoices] = useState([]);
  const [currentInvoice, setCurrentInvoice] = useState({});
  const [customers, setCustomers] = useState([]);

  // Fetch all invoices
  const getInvoices = () => {
    InvoiceService.getInvoices().then(
      (response) => {
        let data = response.data.data;
        setInvoices(data);
        console.log(data);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(resMessage);
      }
    );
  };

  // Fetch single invoice by id
  const getCurrentInvoice = (id) => {
    InvoiceService.getInvoiceById(id).then(
      (response) => {
        let data = response.data.data;
        setCurrentInvoice(data);
        console.log(data);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(resMessage);
      }
    );
  };

  // stop displaying splash screen and show landing screen.
  const setTimePassed = () => {
    setLoading(false);
  };

  // set loading screen delay of 2 seconds for splashscreen.
  useEffect(() => {
    getInvoices();
    setTimeout(() => {
      setTimePassed();
    }, 2000);
  }, []);

  return (
    <div className="App">
      <Head>
        <title>Aviyel Invoicer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loading === true ? (
        <div className="App">
          <Splash
            bg={"bg-blue-200 h-screen "}
            text="Please wait a moment, we're compiling your invoices 😊"
          />
        </div>
      ) : (
        <Dashboard
          title="INVOICE DETAILS"
          invoices={invoices}
          getInvoices={getInvoices}
          getCurrentInvoice={getCurrentInvoice}
          customers={customers}
          currentInvoice={currentInvoice}
        />
      )}
      <ToastContainer />
    </div>
  );
}
