import React from "react";
import Invoice from "../invoice/invoice";
import Nav from "../layout/nav";
import Footer from "./footer";
import SideBar from "./sidebar";

export default function dashboard({title}) {
  return (
    <div className="bg-gray-100 flex">
      <SideBar />
      <div className="relative w-full flex flex-col h-screen overflow-y-hidden">
        <Nav />
        <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
          <main className="w-full flex-grow p-6">
            <h1 className="text-md text-gray-500 pb-6">{title}</h1>
            <Invoice />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
