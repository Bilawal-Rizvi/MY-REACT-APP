import React from "react";

function Endstit({botimg}) {
  const urls=[
'/images/49_8f02d1c3-51d2-4da6-bb22-1221b6b2e981.webp',
'/images/112_c5b190c9-23e1-443b-8d69-afbf91dc13e8.jpg',
'/images/129_fcc3d002-7f2f-49ba-a14b-3a3103d785df.jpg',
'/images/44_0790c9fe-828e-46c4-b5a7-d88c4bbcbe19.jpg'
  ]
  return (
    <>
      <div className="flex gap-10 m-10 ml-15">
        {
          urls.map((url)=>(
        <div onClick={()=>botimg(url)} className=" text-center image relative flex flex-col items-center w-max">
            <img src={url} width='225' alt="" />
          <br />
          <p>EMBROIDERED VELVET UF-4319</p>
          <h1>
            <b>PKR 19,950.00</b>
          </h1>
          <span>VELVET</span>
        </div>
        ))
       }
      </div>
    </>
  );
}

export default Endstit;
