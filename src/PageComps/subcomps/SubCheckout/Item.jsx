import React from "react";

function Item() {
  return (
    <>
      <div className="flex s gap-3">
        <div className="border-3  border-white w-15 h-18  rounded-2xl flex justify-center items-center mb-5 ">
          <img
            src="public\images\47_abf097cc-5fed-4fd1-8e8a-41f7ebdb58bb.webp"
            width="40"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-1 justify-center mb-5 ">
            <h1>EMBROIDERED VISCOSE SILK UF-4306</h1>
            <span className="text-gray-500"> UNSTITCHED / DEFAULT</span>
        </div>
        <h1  className="text-center mt-3 mb-5">Rs 13,900.00</h1>
      </div>
    </>
  );
}

export default Item;
