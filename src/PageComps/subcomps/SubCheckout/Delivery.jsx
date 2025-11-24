import React from "react";

function Delivery() {
  return (
    <>
      <div className="flex w-full flex-col gap-3">
        <select className=" w-full border h-12 rounded-md s p-2">
          <option className="s">Pakistan</option>
        </select>
        <div className="w-full flex gap-2">
          <input type="text" className="input w-2/4" placeholder="First Name" />
          <input type="text" className="input w-2/4" placeholder="Last Name" />
        </div>
        <input type="text" placeholder="Address" className="input" />
        <input
          type="text"
          placeholder="Apartment,suite,etc.(optional)"
          className="input"
        />
        <div className="w-full flex gap-2">
          <input type="text" className="input w-2/4" placeholder="City" />
          <input
            type="text"
            className="input w-2/4"
            placeholder="Postal code (optional)"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <input type="text" placeholder="Phone" className="input w-full" />
          <div>
          <input type="checkbox" name="f" id="f" />
          <label for="f" className="s">Save this information for next time</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Delivery;
