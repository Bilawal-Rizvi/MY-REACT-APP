import React, { useState } from "react";
import Details from "./subcomps/SubProduct/Details";
import Smallcol from "./subcomps/SubProduct/Smallcol";
import Largecol from "./subcomps/SubProduct/Largecol";
import Endstit from "./subcomps/SubProduct/Endstit";

function Product({onimg , setonimg}) {
 
  return (
    <>
      <div className="mt-32 pl-13 border-b border-gray-300  justify-between pb-10 flex ">
        <div className="flex flex-col gap-5 mr-25 " >
          <Smallcol  setImage={setonimg}/>
        </div>
        <div className="h-200.5 overflow-scroll div flex flex-col gap-8">
          <Largecol img={onimg}/>
        </div>
        <div className="ml-24">
          <Details />
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-3xl text-center">RELATED PRODUCTS</h1>
        <Endstit botimg={setonimg} />
      </div>
    </>
  );
}

export default Product;
