import React, { useState } from "react";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import { jsPDF } from "jspdf";
import moment from "moment";

export default function Invoice({ currentInvoice }) {
  const [invoiceTotal, setInvoiceTotal] = useState(0);
  const [taxValue, setTaxValue] = useState(0);
  const [discountValue, setDiscountValue] = useState(0);

  // convert html to png image and add to pdf for printing
  const printPdf = () => {
    htmlToImage
      .toPng(document.getElementById("myInvoice"), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "my-image-name.jpeg";
        const pdf = new jsPDF("p", "pt", "a4", false);
        pdf.addImage(dataUrl, "PNG", 0, 0, 600, 0, undefined, false);
        pdf.save("download.pdf");
      });
  };

  // convert all prices to integers and adding them up
  const total = () => {
    let finalValue = 0;
    let number = currentInvoice.Items?.map((item, i) => {
      let num = parseInt(item.price);
      finalValue += num;
      return finalValue;
    });
    console.log(finalValue);
    return finalValue;
  };

  //calculate tax rate from total
  const taxRate = (pc, tot) => {
    let number = (parseInt(pc) / 100) * tot;
    return number;
    // setTaxValue(number);
  };

  //calculate discount from total
  const discount = (pc, tot) => {
    console.log(tot);
    let number = (parseInt(pc) / 100) * tot;
    console.log("number " + number);
    return number;
    // setDiscountValue(number);
  };

  return (
    <div id="myInvoice" className="p-6 bg-white">
      {/* header */}
      <section class="text-gray-600 body-font">
        <div class="container px-5 mx-auto flex items-center md:flex-row flex-col">
          <div class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
            <h1 class="md:text-lg text-sm font-medium title-font text-gray-800 mb-2">
              INVOICE
            </h1>
            <h2 class="text-sm text-gray-500 tracking-widest font-medium title-font mb-1">
              #INV-
              {currentInvoice.id
                ? String(currentInvoice.id).padStart(4, "0")
                : "0001"}
            </h2>
            <h3 class="text-xs text-gray-500 tracking-widest font-normal mb-1">
              {moment(currentInvoice?.createdAt).calendar()}
            </h3>
          </div>
          <div class="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
            <div class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-right text-center">
              <h2 class="text-xs text-gray-500 tracking-widest font-medium title-font mb-1">
                CUSTOMER DETAILS
              </h2>
              <h1 class="md:text-lg text-sm font-medium title-font text-gray-800 uppercase">
                {currentInvoice?.Customer
                  ? currentInvoice.Customer.full_name
                  : "Unknown User"}
              </h1>
              <h2 class="text-xs text-gray-500 tracking-widest font-medium title-font mb-1">
                {currentInvoice?.Customer
                  ? currentInvoice.Customer.email
                  : "unknownemail@gmail.com"}
              </h2>
            </div>
            <button
              class="bg-white border border-blue-500 text-blue-500 inline-flex py-3 px-5 rounded-sm items-center hover:bg-blue-500 hover:text-white focus:outline-none"
              onClick={printPdf}
            >
              <span class="flex items-start flex-col leading-none">
                <span class="title-font font-medium">PRINT</span>
              </span>
              <svg
                className="w-6 h-6 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Invoice items list */}
      <div class="container py-24 px-5 mx-auto flex items-center md:flex-row flex-col">
        <div class="w-full mx-auto overflow-auto">
          <h1 className="text-md text-gray-800 pb-6 px-4 ">PRODUCT DETAILS</h1>
          <table class="table-auto w-full text-left whitespace-no-wrap">
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
              {currentInvoice.Items?.map((item, i) => {
                return (
                  <tr className="border-b">
                    <td class="px-4 py-6">{item.productId}</td>
                    <td class="px-4 py-6">{item.quantity}</td>
                    <td class="px-4 py-6">${item.price}</td>
                  </tr>
                );
              })}

              <tr>
                <td class="px-4 py-3"></td>
                <td class="px-4 py-3">Total</td>
                <td class="px-4 py-3 font-bold">${total() || "0.00"}</td>
              </tr>
              <tr>
                <td class="px-4 py-3"></td>
                <td class="px-4 py-3">
                  Tax ({currentInvoice.tax_percentage || "0"}%)
                </td>
                <td class="px-4 py-3 font-bold">
                  $
                  {taxRate(currentInvoice.tax_percentage, total()).toFixed() ||
                    "0.00"}
                </td>
              </tr>
              <tr>
                <td class="px-4 py-3"></td>
                <td class="px-4 py-3">
                  Discount ({currentInvoice.discount_percentage || "0"}%)
                </td>
                <td class="px-4 py-3 font-bold">
                  $
                  {discount(
                    currentInvoice.discount_percentage,
                    total()
                  ).toFixed() || "0.00"}
                </td>
              </tr>
              <tr className="text-lg">
                <td class="px-4 py-3"></td>
                <td class="px-4 py-3 font-bold">Grand Total</td>
                <td class="px-4 py-3 font-bold">
                  $
                  {(
                    total() +
                    taxRate(currentInvoice.tax_percentage, invoiceTotal) +
                    discount(currentInvoice.discount_percentage, invoiceTotal)
                  ).toFixed() || "0.00"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
