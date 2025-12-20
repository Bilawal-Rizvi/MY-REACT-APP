import React from "react";
import "../App.css";

function Nav() {
  return (
    <>
      <div className=" relative  ">
        <div className=" p-2 h-18 text-2xl border-b flex justify-between absolute top-0 w-full hover:bg-white transition-all duration-1000  pl-10 pr-10">
          <p className="self-center ">
            <i className="fa-solid fa-bars text-2xl"></i>
          </p>

          <img
            src="/images/LOGO_PNG_V01_ca621119-9615-4843-a4c7-3cbf07d1452a.png"
            className="w-35 self-center h-max ml-40"
            alt=""
          />
          <div className="flex gap-5 w-2/10 items-center">
            <p className=" self-center">PAKISTAN</p>
            <p className="self-center">v</p>
            <p>
              {" "}
              <i className="fa-regular fa-user"></i>
            </p>
            <p>
              {" "}
              <i className="fa-solid fa-magnifying-glass"></i>
            </p>
            <p>
              <i className="fa-solid fa-cart-shopping"></i>
            </p>
            <p>
              {" "}
              <i className="fa-regular fa-heart"></i>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
