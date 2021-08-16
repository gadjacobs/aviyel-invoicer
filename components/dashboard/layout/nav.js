import React from "react";

export default function Nav() {
  return (
    <>
      <header className="text-gray-600 bg-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <span className="ml-3 text-xl font-family-karla text-white">
              Aviyel Invoicer
            </span>
          </a>
        </div>
      </header>
    </>
  );
}
