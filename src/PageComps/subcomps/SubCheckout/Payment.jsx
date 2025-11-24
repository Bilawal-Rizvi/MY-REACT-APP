import React from "react";

function Payment() {
  return (
    <>
      <div className="w-full pb-6 border-b border-gray-300 mb-3">
        <div className="input flex gap-2  ">
          <input type="radio" name="e" id="e" className="w-5 h-5 " />
          <label htmlFor="e" className="s ">
            {" "}
            Cash on Delivery (COD)
          </label>
        </div>
        <div className="input flex gap-2  ">
          <input type="radio" name="e" id="e" className="w-5 h-5" />
          <label htmlFor="e" className="s ">
            {" "}
            Credit card
          </label>
        </div>
        <div className="w-full flex flex-col gap-3 p-5 bg-gray-100">
          <input type="text" className="input" placeholder="Card Number" />
          <div className="w-full flex gap-2">
            <input type="text" className="input w-2/4" placeholder="(MM/YY)" />
            <input
              type="text"
              className="input w-2/4"
              placeholder="Secuirty Code"
            />
          </div>
          <input type="text" placeholder="Name on card" className="input" />
          <div>
            <input type="checkbox" name="g" id="g" />
            <label for="g" className="s">
              Save this information for next time
            </label>
          </div>
        </div>
        <button className="w-full bg-black text-white mt-5 mb-5 h-10 rounded-md"> Pay Now</button>
      </div>
    </>
  );
}

export default Payment;
