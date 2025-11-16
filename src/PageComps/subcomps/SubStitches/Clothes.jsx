import React from "react";
import SingleImg from "./SingleImg";

function Clothes({newimage}) {
  const urls=[
    '/images/170_caa3670d-4833-467c-9211-64052bb70d65.jpg',
'/images/196_58328ca8-6bb3-41e8-a711-f66511be7abe.jpg',
'/images/188_155b1c11-3512-4b38-9b58-10832b46dcc4.jpg',
'/images/176_e9e15010-a984-4c2d-be42-73fc951df232.jpg',
'/images/166_eb20b656-f27f-4484-83d9-4c001187d96a.webp',
'/images/161_46ba3002-a3d1-4702-994a-df34298c175d.jpg',
'/images/129_fcc3d002-7f2f-49ba-a14b-3a3103d785df.jpg',
'/images/119_29dd5585-dfae-401d-984c-fd30d0adf32b.jpg',
'/images/112_c5b190c9-23e1-443b-8d69-afbf91dc13e8.jpg',
'/images/176_e9e15010-a984-4c2d-be42-73fc951df232.jpg'
  ]
  return (
    <>
      <div className="mt-10 flex flex-wrap gap-20 h-180 overflow-scroll div">
  {
    urls.map((url ) => (
      <div   onClick={()=> newimage(url)}>
        <SingleImg URL={url} />
      </div>
    ))
    }

      </div>
    </>
  );
}

export default Clothes;
