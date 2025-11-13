import React from "react";
import "/src/Index.css";
function News() {
  return (
    <>
      <div className=" flex flex-col justify-center left-2/8 relative items-center mt-20 mb-20 gap-5 w-max">
        <h1 className=" text-3xl">NEWSLETTER</h1>
        <p className=" text-center  w-full">
          Sign up to get notified and <b>Get 5% OFF </b>when you subscribe to
          our newsletter.
        </p>
        <div className="flex gap-5">
          <input
            type="email"
            placeholder="Enter Your Email"
            className=" p-2 w-90 border h-12 self-start"
          />
          <button className="bg-black text-white h-12 w-50">SUBSCRIBE</button>
        </div>
      </div>
    </>
  );
}

export default News;
