import React from "react";
import Itemcart from "../SubCart/Itemcart";
import Item from "./Item";

function Leftside() {
  return (
    <>
      <div className=" w-full h-full flex flex-col gap-3 pt-12 pl-10 pr-31 ">
        <Item />
        <div className="flex gap-5 w-full">
          <input
            type="text"
            className="input w-90"
            placeholder="Discount code"
          />
          <button className="w-15 h-12 rounded-md bg-gray-300 text-gray-500 ">
            {" "}
            Apply
          </button>
        </div>
        <div className=" flex flex-col gap-2 mt-5 s">
          <h1 className="flex justify-between">
            Subtotal
            <span>Rs 13,900.00</span>
          </h1>
          <h1 className="flex justify-between">
            Shipping
            <span className="font-bold">Free</span>
          </h1>
          <h1 className="flex justify-between text-2xl">
            Total <span>Rs 13,900.00</span>
          </h1 >
          <h1 className="text-gray-500">Including Rs 0.00 in taxes</h1>
        </div>
      </div>
    </>
  );
}

export default Leftside;
