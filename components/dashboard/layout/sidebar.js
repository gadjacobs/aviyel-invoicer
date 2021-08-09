import React, { useState, useEffect } from "react";
import CreateInvoice from "../createInvoice/createInvoice";
import Link from "next/link";
import moment from "moment";

export default function SideBar({
  invoices,
  customers,
  getCurrentInvoice,
  currentInvoice,
}) {
  const [showModal, setShowModal] = React.useState(false);

  // convert all prices to integers and adding them up
  const total = (invoice, i) => {
    let finalValue = 0;
    let number = invoice.Items?.map((item, i) => {
      let num = parseInt(item.price);
      finalValue += num;
      return finalValue;
    });
    console.log(finalValue);
    return finalValue;
  };

  useEffect(() => {
    getCurrentInvoice(currentInvoice?.id || 1);
  }, []);
  return (
    <aside className="relative sidebar-bg h-screen max-h-screen w-96 hidden sm:block shadow-xl">
      <div className="p-6 h-auto">
        <Link
          className="text-3xl font-semibold uppercase hover:text-gray-300"
          href="/"
        >
          <span class="text-white font-semibold uppercase hover:text-gray-300 ml-3 text-md font-family-karla">
            Aviyel Invoicer
          </span>
        </Link>
        <button
          className="w-full text-gray-700 bg-white cta-btn font-semibold py-2 mt-10 shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center"
          onClick={() => setShowModal(true)}
        >
          New Invoice
        </button>
        {showModal ? (
          <CreateInvoice setShowModal={setShowModal} customers={customers} />
        ) : null}
        <h1 className="text-md text-gray-500 pt-3">
          INVOICES -{" "}
          <span className="font-bold text-gray-300">{invoices?.length}</span>
        </h1>
      </div>
      <nav className="text-white text-base font-semibold h-3/4 overflow-y-auto pb-20">
        {invoices?.map((invoice, i) => {
          return (
            <a
              onClick={() => getCurrentInvoice(invoice.id)}
              key={invoice.id}
              class="flex flex-col pl-6 pr-3 py-3 border-b border-gray-500 mx-auto max-w-sm relative"
            >
              <div>
                <div class="flex items-center flex-wrap mt-auto w-full">
                  <span class="text-gray-200 inline-flex items-center py-2">
                    #INV-{String(invoice.id).padStart(4, "0")}
                  </span>
                  <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-xs font-light py-1">
                    {moment(invoice.createdAt).calendar()}
                  </span>
                </div>
              </div>
              <div>
                <h3 class="font-light text-sm text-gray-200">
                  Items - {invoice.Items.length}
                </h3>
                <div class="flex items-center flex-wrap mt-auto w-full">
                  <span className="text-sm inline-flex items-center text-blue-400">
                    {invoice.Customer
                      ? invoice.Customer.full_name
                      : "Unknown User"}
                  </span>
                  <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none pr-3 py-1">
                    ${total(invoice, i) || "0.00"}
                  </span>
                </div>
              </div>
            </a>
          );
        })}
      </nav>
      <a
        href="https://aviyel.com/"
        target="_blank"
        rel="noreferrer"
        className="absolute w-full bg-gray-800 bottom-0 active-nav-link text-white flex items-center justify-center py-4"
      >
        <i className="fa fa-arrow-circle-up mr-3"></i>
        For Aviyel ❤️
      </a>
    </aside>
  );
}
