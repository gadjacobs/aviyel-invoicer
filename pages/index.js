import React, { useEffect, useState } from "react";
import Head from "next/head";
import Dashboard from "../components/dashboard/layout/dashboard";
import Splash from "../components/splashscreen/splash";

export default function Home() {
  // set loading screen delay of 2 seconds for splashscreen.
  useEffect(() => {
    setTimeout(() => {
      setTimePassed();
    }, 2000);
  });

  const [loading, setLoading] = useState(true);

  const setTimePassed = () => {
    setLoading(false);
  };

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
        <Dashboard title="INVOICE DETAILS" />
      )}
    </div>
  );
}
