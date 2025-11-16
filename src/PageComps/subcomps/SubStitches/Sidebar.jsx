import React from "react";

function Sidebar() {
  return (
    <>
      <div className="pl-10 text-xl font-light w-50">
        <ul className="flex flex-col gap-5 pt-10 pb-10 w-50 justify-space-between  ">
          <li className="flex justify-between border-b pb-5">
            Availability <span> v</span>
          </li>
          <li className="flex justify-between border-b pb-5">
            Price <span>v</span>
          </li>
          <li className="flex justify-between border-b pb-5">
            Type <span>v</span>{" "}
          </li>
          <li className="flex justify-between border-b pb-5">
            Fabric <span>v</span>
          </li>
          <li className="flex justify-between border-b pb-5">
            Size <span>v</span>
          </li>
          <li className="flex justify-between border-b pb-5">
            Pieces <span>v</span>
          </li>
          <li className="flex justify-between ">
            Product Style <span>v</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
