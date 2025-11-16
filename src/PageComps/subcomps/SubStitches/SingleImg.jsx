import React from "react";
import "/src/App.css";
import { useNavigate } from "react-router-dom";
function SingleImg(props) {
  const navigate = useNavigate();
  return (
    <>
      <div className=" text-center image relative w-max">
        <img
          src={props.URL}
          width="400"
          onClick={() => navigate("/product")}
          alt=""
        />
        <br />
        <p>EMBROIDERED VELVET UF-4319</p>
        <h1>
          <b>PKR 19,950.00</b>
        </h1>
        <span>VELVET</span>
      </div>
    </>
  );
}

export default SingleImg;
