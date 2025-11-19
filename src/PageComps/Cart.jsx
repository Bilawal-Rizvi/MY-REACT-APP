import React from "react";
import Headcart from "./subcomps/SubCart/Headcart";
import Itemcart from "./subcomps/SubCart/Itemcart";
import Botcart from "./subcomps/SubCart/Botcart";

function Cart() {
  return (
    <>
      <div className="mt-35 display-flex flex-col items-center justify-center">
        <div>
          <Headcart />
        </div>
        <div className="mr-35 ml-35 ">
          <div className="flex items-center justify-between pb-4 border-gray-300 font-light border-b  text-gray-500">
            <h1 className="w-150">PRODUCT</h1>
            <h1 className="w-30 text-center">QUANTITY</h1>
            <h1 className="w-30 text-end">TOTAL</h1>
          </div>

          <Itemcart URL="public\images\45_f03dc7a9-9f84-415a-b95e-f14f82cc7a64.jpg" />
          <Itemcart URL="public\images\46_1eb68c7b-652d-4c80-932f-12d15af5ba40.webp" />
        </div>
      </div>
      <div>
        <Botcart />
      </div>
    </>
  );
}

export default Cart;
