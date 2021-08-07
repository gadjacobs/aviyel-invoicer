import React from "react";
import ReactLoading from "react-loading";

export default function Splash({ text, bg }) {
  return (
    <div className={`${bg} flex text-white text-xl flex-wrap justify-center content-center`}>
      <div>
        <h1>{text}</h1> <br />
        <ReactLoading
          className="mx-auto text-center"
          type="spin"
          color="#fff"
        />
      </div>
    </div>
  );
}
