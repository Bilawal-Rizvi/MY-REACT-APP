import React from "react";
import Contact from "./Contact";
import Delivery from "./Delivery";
import Payment from "./Payment";

function Rightside() {
  return (
    <>
      <div className="flex flex-col gap-3 mb-12 ">
        <h1 className="flex justify-between text-2xl items-center font-bold">
          Contact <span className=" font-light s underline">Sign in</span>
        </h1>
        <Contact/>
      </div>
      <div className="mb-6">
       <h1 className="flex justify-between text-2xl items-center font-bold mb-2 ">
          Delivery
        </h1>
       <Delivery/>
       </div> 
       <div>
          <h1 className="flex justify-between text-2xl items-center font-bold mb-2 ">
          Payment
        </h1>
        <span className="s text-gray-400 font-light">  All transactions are secure and encrypted.</span>
        <Payment/>
        <div className="s underline flex gap-4">
            <span>Refund policy</span>
            <span>Shipping</span>
            <span>Privacy</span>
            <span>Terms of Service</span>
            <span>Contact</span>

        </div>
       </div>
    </>
  );
}

export default Rightside;
