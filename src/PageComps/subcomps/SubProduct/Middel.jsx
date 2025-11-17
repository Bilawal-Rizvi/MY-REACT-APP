import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Middel() {
  const navigate = useNavigate();
  const [active, setActive] = useState(true);
  const [count, setCount] = useState(1);
  return (
    <>
      <div className="flex flex-col gap-6 mt-5">
        <h1>TYPE:</h1>
        <div>
          <button
            className={
              active
                ? " mr-5 border font-light h-10 w-30"
                : "active mr-5 border font-light h-10 w-30"
            }
            disabled={active}
            onClick={() => setActive(true)}
          >
            UNSTITCHED
          </button>
          <button
            className={
              !active
                ? " mr-5 border font-light h-10 w-30"
                : "active mr-5 border font-light h-10 w-30"
            }
            disabled={!active}
            onClick={() => setActive(!active)}
          >
            STITCHED
          </button>
        </div>
        <button className="mr-5 border border-gray-400 font-light h-10 w-30 flex items-center justify-between pr-2 pl-2">
          <span 
           onClick={() =>count > 0 && setCount(count - 1)}
            className="text-3xl font-extralight"
          >
            -
          </span>{" "}
          {count}
          <span className="text-2xl font-extralight" onClick={()=> setCount(count+1)}>+</span>
        </button>
        <button
          onClick={() => navigate("/cart")}
          data-text="ADD TO CART"
          className="p delay-200 text-black   border-black border  duration-1000 ease-in  relative  font-lighter  w-full h-9.5 bottom-0  left-0  text-center  bg-white"
        >
          ADD TO CART
        </button>
      </div>
    </>
  );
}

export default Middel;
