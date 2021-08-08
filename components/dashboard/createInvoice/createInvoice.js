import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import InvoiceService from "../../../services/invoice.services";

export default function CreateInvoice({ setShowModal }) {
  const [invoice, setInvoice] = useState([]);
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [subTotal, setSubTotal] = useState("");
  const [tax, setTax] = useState("");
  const [discount, setDiscount] = useState("");
  const [grandTotal, setGrandTotal] = useState();
  const [products, setProducts] = useState([]);

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

  const addProduct = (e) => {
    e.preventDefault();

    if (itemName !== "" && quantity !== "" && price !== "") {
      InvoiceService.createProduct(quantity, itemName, "", price).then(
        (response) => {
          if (response.status) {
            setPrice("");
            setQuantity("");
            setItemName("");
            toast.success("Added product.");
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
    }
  };

  // Post form data to backend to add invoices
  const createInvoice = (e) => {
    e.preventDefault();

    if (itemName !== "" && quantity !== "" && price !== "") {
      InvoiceService.createInvoice(price, "1", tax, discount, "cash", itemName).then(
        (response) => {
          if (response.status) {
            toast.success("Invoice created successfully");
            setShowModal()
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
    }
  };

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
                <div class="w-full mx-auto overflow-auto pb-12 md:pb-20">
                  <h1 className="text-md text-gray-800 pb-6 px-4 ">
                    PRODUCT DETAILS
                  </h1>
                  <table
                    class="table-auto w-full text-left whitespace-no-wrap overflow-x-hidden overflow-y-scroll
                  "
                  >
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
                      <tr className="">
                        <td class="px-4 py-6">
                          <input
                            id="name"
                            name="name"
                            isRequired
                            type="text"
                            value={itemName}
                            placeholder="Enter the name of the item"
                            onChange={(e) => {
                              setItemName(e.target.value);
                            }}
                            className="block w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 form-input focus:border-blue-700 text-sm"
                          />
                        </td>
                        <td class="px-4 py-6">
                          <input
                            id="stock"
                            name="stock"
                            isRequired
                            type="text"
                            value={quantity}
                            placeholder="1"
                            onChange={(e) => {
                              setQuantity(e.target.value);
                            }}
                            className="block w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 form-input focus:border-blue-700 text-sm"
                          />
                        </td>
                        <td class="px-4 py-6 flex flex-row">
                          <input
                            id="cost"
                            name="cost"
                            isRequired
                            type="text"
                            value={price}
                            placeholder="0.00"
                            onChange={(e) => {
                              setPrice(e.target.value);
                            }}
                            className="block w-1/2 px-3 mx-1 py-2 mt-1 text-gray-700 border border-gray-300 form-input focus:border-blue-700 text-sm"
                          />
                          <button className="flex w-auto ml-auto text-center text-blue-700 bg-white border mt-1 border-blue-500 py-2 px-3 focus:outline-none hover:bg-blue-700 hover:text-white align-middle justify-center py-auto">
                            <svg
                              class="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                              ></path>
                            </svg>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="flex flex-row w-full mx-1 md:mx-4">
                <input
                  id="tax"
                  name="tax"
                  isRequired
                  type="text"
                  value={tax}
                  placeholder="Tax (%)"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  className="block w-1/6 px-3 mx-1 py-2 mt-1 text-gray-700 border border-gray-300 form-input focus:border-blue-700 text-sm"
                />
                <input
                  id="discount"
                  name="discount"
                  isRequired
                  type="text"
                  value={discount}
                  placeholder="Discount (%)"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  className="block w-1/6 px-3 mx-1 py-2 mt-1 text-gray-700 border border-gray-300 form-input focus:border-blue-700 text-sm"
                />
                <div className="w-2/6"></div>
                <h3 className="w-1/6 text-gray-500">Sub Total: </h3>
                <h3 className="w-1/6 text-gray-500 font-bold">$560</h3>
              </div>
            </div>
            {/*footer*/}
            <div className="flex w-full items-center justify-between p-6 bg-gray-100 rounded-b">
              <div className="w-1/6">
                <h3 className="text-gray-500 font-bold">Tax</h3>
                <p className="text-gray-500">$0.00</p>
              </div>
              <div className="w-1/6">
                <h3 className="text-gray-500 font-bold">Discount</h3>
                <p className="text-gray-500">$0.00</p>
              </div>
              <div className="w-1/6">
                <h3 className="text-gray-500 font-bold">Grand Total</h3>
                <p className="text-gray-500">$1053.60</p>
              </div>
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
