import React from "react";
import Sidebar from "./Sidebar";
import Clothes from "./Clothes";

function MainStitched({theimage}) {
  return (
    <>
      <div className="flex gap-30 mb-30">
        <Sidebar />
        <Clothes newimage={theimage}/>
      </div>
    </>
  );
}

export default MainStitched;
