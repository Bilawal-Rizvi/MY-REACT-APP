import React from "react";
import Smallimg from "./Smallimg";
function Smallcol({setImage}) {
  
  const images=[
    '/images/41_5edcd110-6571-42b6-97e1-2f911aaa87de.webp',
    '/images/42_fa70e3e1-bfec-4e8b-ab22-4f372e64336b.webp',
    '/images/43_f01b148f-3ba0-46a7-aaa2-d15374081ec5.webp',
    "/images/44_b0cc298a-847c-4cec-b6f4-a72f2e1e55cb.webp" ,
    "/images/45_f03dc7a9-9f84-415a-b95e-f14f82cc7a64.jpg",
    "/images/46_1eb68c7b-652d-4c80-932f-12d15af5ba40.webp",
    "/images/47_abf097cc-5fed-4fd1-8e8a-41f7ebdb58bb.webp" ,
    "/images/49_8f02d1c3-51d2-4da6-bb22-1221b6b2e981.webp"
    
  ]
  return (
    <>
    {
    images.map((url) => (
      <div   onClick={()=> setImage(url)}>
        <Smallimg URL={url} />
      </div>
    ))
    }    </>
  );
}

export default Smallcol;
