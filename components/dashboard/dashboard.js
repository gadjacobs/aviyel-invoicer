import React from "react";
import Nav from "./layout/nav";

export default function dashboard() {
  return (
    <div className="bg-gray-100 font-family-karla flex">
      <div className="relative w-full flex flex-col h-screen overflow-y-hidden">
        <Nav />
      </div>
    </div>
  );
}
