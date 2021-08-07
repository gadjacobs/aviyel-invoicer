import React, { useState } from "react";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import { jsPDF } from "jspdf";

export default function Invoice(props) {
    // convert html to png image and add to pdf for printing
  const printPdf = () => {
    htmlToImage
      .toPng(document.getElementById("myInvoice"), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "my-image-name.jpeg";
        const pdf = new jsPDF('p', 'pt', 'a4', false);
        pdf.addImage(dataUrl, "PNG", 0, 0, 600, 0, undefined, false);
        pdf.save("download.pdf");
      });
  };
  return (
    <div id="myInvoice" className="p-6 bg-white">
      {/* header */}
      <section class="text-gray-600 body-font">
        <div class="container px-5 mx-auto flex items-center md:flex-row flex-col">
          <div class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
            <h1 class="md:text-lg text-sm font-medium title-font text-gray-800">
              INVOICE
            </h1>
            <h2 class="text-xs text-gray-500 tracking-widest font-medium title-font mb-1">
              #INV001
            </h2>
          </div>
          <div class="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
            <div class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-right text-center">
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
            <button class="bg-white border border-blue-500 text-blue-500 inline-flex py-3 px-5 rounded-sm items-center hover:bg-blue-500 hover:text-white focus:outline-none" onClick={printPdf}>
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
    </div>
  );
}
