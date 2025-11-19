import React from "react";

function Itemcart(props) {
  return (
    <>
      <div className="mt-5 flex items-center justify-between pb-4 border-b border-gray-300">
        <div className="flex items-center gap-5 w-150">
          <img src={props.URL} width="120" alt="" />
          <div className="flex flex-col gap-1">
            <span className="s font-light">UNSTITCHED</span>
            <h1 className="font-light ">EMBROIDERED VISCOSE SILK UF-4306</h1>
            <h1 className="font-bold s">PKR 6,950.00</h1>
            <p className="s font-light">UNSTITCHED / DEFAULT</p>
          </div>
        </div>
        <div className="w-30 flex flex-col items-center ">
          <button className=" border border-gray-400 font-light h-9 w-25 flex items-center justify-between pr-2 pl-2">
            <span className="text-3xl font-extralight">-</span> 1
            <span className="text-2xl font-extralight">+</span>
          </button>
          <span className="text-center underline r">remove</span>
        </div>
        <div className="w-30 text-end">
          <h1 className="s">PKR 6,950.00</h1>
        </div>
      </div>
    </>
  );
}

export default Itemcart;
