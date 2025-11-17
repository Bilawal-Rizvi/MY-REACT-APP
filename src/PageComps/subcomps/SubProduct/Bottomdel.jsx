import React from "react";

function Bottomdel() {
  return (
    <>
      <div className="mt-15 dd font-light">
        <div className="flex items-center gap-5 border-t pt-6   mb-5">
          <i class="fa-solid fa-box"></i>
          <h1 className="flex justify-between items-center w-full">
            PRODUCT DETAILS <span className="text-2xl font-extralight">+</span>
          </h1>
        </div>
        <div className="flex items-center gap-5 border-t pt-6 mb-5">
          <i class="fa-solid fa-plane-departure"></i>
          <h1 className="flex justify-between items-center w-full">
            {" "}
            DETAILS <span className="text-2xl font-extralight">+</span>
          </h1>
        </div>
        <div className="flex items-center gap-5 border-t pt-6 mb-5 ">
          <i class="fa-solid fa-tag"></i>
          <h1 className="flex justify-between items-center w-full">
            DESCRIPTION <span className="text-2xl font-extralight">+</span>
          </h1>
        </div>
        <div className="flex items-center gap-5 border-t pt-6 mb-5">
          <i class="fa-solid fa-rotate"></i>
          <h1 className="flex justify-between items-center w-full">
            RETURN AND EXCHANGE{" "}
            <span className="text-2xl font-extralight">+</span>
          </h1>
        </div>
        <div className="flex items-center gap-5  border-t  border-b pt-6 pb-6 mb-5">
          <i class="fa-solid fa-leaf"></i>
          <h1 className="flex justify-between items-center w-full">
            CARE AND INSTRUCTIONS{" "}
            <span className="text-2xl font-extralight">+</span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Bottomdel;
