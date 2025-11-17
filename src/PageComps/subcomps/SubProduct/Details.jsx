import React from "react";
import Topdel from "./Topdel";
import Middel from "./Middel";
import Bottomdel from "./Bottomdel";

function Details() {
  return (
    <>
      <div className="flex flex-col mr-8 w-90">
        <Topdel />
        <Middel />
        <Bottomdel />
      </div>
    </>
  );
}

export default Details;
