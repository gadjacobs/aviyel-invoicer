import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function CreateInvoice({ setShowModal }) {

  const [invoice, setInvoice] = useState([]);
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 mx-auto max-w-full w-2/3">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 rounded-t">
              <h3 className="w-4/12 text-xl font-medium align-baseline">
                Create New Invoice
              </h3>
              <h3 className="w-3/12 text-md text-gray-500 font-medium uppercase align-baseline">
                Order No: 1234
              </h3>
              <div class="ml-auto flex flex-col md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-right text-center">
                <h2 class="text-xs text-gray-500 tracking-widest font-medium title-font mb-1">
                  CUSTOMER DETAILS
                </h2>
                <h1 class="md:text-lg text-sm font-medium title-font text-gray-800">
                  JOHN DOE
                </h1>
                <h2 class="text-xs text-gray-500 tracking-widest font-medium title-font mb-1">
                  john.doe@gmail.com
                </h2>
              </div>
              <button className="mx-1 my-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                <svg
                  class="w-10 h-10"
                  fill="none"
                  stroke="lightblue"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  ></path>
                </svg>
              </button>
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
              <div class="container mx-auto flex items-center md:flex-row flex-col">
                <div class="w-full mx-auto overflow-auto">
                  <h1 className="text-md text-gray-800 pb-6 px-4 ">
                    PRODUCT DETAILS
                  </h1>
                  <table class="table-auto w-full text-left whitespace-no-wrap overflow-x-hidden overflow-y-scroll">
                    <thead>
                      <tr>
                        <th class="w-1/2 px-4 py-3 uppercase title-font tracking-wider font-medium text-gray-900 text-sm bg-white border-t border-b rounded-tl rounded-bl">
                          Item
                        </th>
                        <th class="px-4 py-3 uppercase title-font tracking-wider font-medium text-gray-900 text-sm bg-white border-t border-b">
                          Quantity
                        </th>
                        <th class="px-4 py-3 uppercase title-font tracking-wider font-medium text-gray-900 text-sm bg-white border-t border-b">
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-500 text-sm">
                      <tr className="border-b">
                        <td class="px-4 py-6">First item</td>
                        <td class="px-4 py-6">5</td>
                        <td class="px-4 py-6">$120.00</td>
                      </tr>
                      <tr className="border-b">
                        <td class="px-4 py-6">Second item</td>
                        <td class="px-4 py-6">1</td>
                        <td class="px-4 py-6">$15.00</td>
                      </tr>
                      <tr className="border-b">
                        <td class="px-4 py-6">Third item</td>
                        <td class="px-4 py-6">6</td>
                        <td class="px-4 py-6">$150.00</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 bg-gray-100 rounded-b">
              <button
                className="bg-blue-400 text-white active:bg-blue-600 font-medium uppercase text-sm px-6 md:px-10 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
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
