import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import InvoiceService from "../../../services/invoice.services";

export default function createCustomer({ setShowModal, getInvoices }) {
  const [invoice, setInvoice] = useState([]);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState({});

  // Fetch all customers
  const getCustomers = () => {
    InvoiceService.getCustomers().then(
      (response) => {
        let data = response.data.data;
        setCustomers(data);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  };

  // Post form data to backend to add a customer
  const createCustomer = (e) => {
    e.preventDefault();

    if (fullName && phoneNumber && email) {
      InvoiceService.createCustomer(email, phoneNumber, fullName).then(
        (response) => {
          if (response.status) {
            toast.success("Customer created successfully");
            setShowModal(false);
            getInvoices();
          } else {
            toast.error(response.data);
          }
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          toast.error(resMessage);
        }
      );
    } else {
      toast.error("Please fix errors on form");
    }
  };

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 mx-auto max-w-full w-2/3">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 rounded-t">
              <h3 className="w-4/12 text-xl font-medium align-baseline">
                Create New Customer
              </h3>
              <h3 className="w-3/12 text-md text-gray-500 font-medium uppercase align-baseline">
                customer No: 1234
              </h3>
              {/* Set display to hidden because I want disable toggling customers on this page */}
              <div className="ml-auto flex-col md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-right text-center hidden">
                <h2 className="text-xs text-gray-500 tracking-widest font-medium title-font mb-1">
                  CUSTOMER DETAILS
                </h2>
                <select
                  defaultValue="Unknown User"
                  onChange={(e) => setSelectedCustomer(e.target.value)}
                  className="md:text-lg text-sm font-medium title-font text-gray-800 uppercase"
                >
                  {customers?.map((customer, i) => {
                    return (
                      <option key={i} value={customer}>
                        {customer.full_name}
                      </option>
                    );
                  })}
                </select>

                <h2 className="text-xs text-gray-500 tracking-widest font-medium title-font mb-1">
                  {selectedCustomer.email}
                </h2>
              </div>
              <button
                className="ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-gray-500 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative py-3 flex-auto">
              <div className="container mx-auto flex items-center md:flex-row flex-col">
                <div className="w-full mx-auto overflow-auto">
                  <h1 className="text-md text-gray-800 pb-6 px-4 ">
                    CUSTOMER DETAILS
                  </h1>
                </div>
              </div>
              <div className="flex flex-row w-full px-1 md:px-4">
                <input
                  id="full_name"
                  name="full_name"
                  type="text"
                  value={fullName}
                  placeholder="Full name"
                  onChange={(e) => {
                    setFullName(e.target.value);
                  }}
                  className="block w-1/3 px-3 mx-1 py-2 mt-1 text-gray-700 border border-gray-300 form-input focus:border-blue-700 text-sm"
                />
                <input
                  id="email"
                  name="email"
                  type="text"
                  value={email}
                  placeholder="Email address"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="block w-1/3 px-3 mx-1 py-2 mt-1 text-gray-700 border border-gray-300 form-input focus:border-blue-700 text-sm"
                />

                <input
                  id="phone_number"
                  name="phone_number"
                  type="text"
                  value={phoneNumber}
                  placeholder="Phone number"
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  className="block w-1/3 px-3 mx-1 py-2 mt-1 text-gray-700 border border-gray-300 form-input focus:border-blue-700 text-sm"
                />
              </div>
            </div>
            {/*footer*/}
            <div className="flex w-full items-center justify-between p-6 bg-gray-100 rounded-b">
              <button
                className="bg-blue-400 text-white active:bg-blue-600 font-medium uppercase text-sm px-6 md:px-10 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ml-auto"
                type="button"
                onClick={(e) => createCustomer(e)}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
