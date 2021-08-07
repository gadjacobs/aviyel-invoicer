import React, { useEffect, useState } from "react";
import Head from "next/head";
import Dashboard from "../components/dashboard/layout/dashboard";
import Splash from "../components/splashscreen/splash";

export default function Home() {
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
            bg={"splash-bg "}
            text="Please wait a moment, we're compiling Gad's reports 😊"
          />
        </div>
      ) : (
        <Dashboard />
      )}
    </div>
  );
}
