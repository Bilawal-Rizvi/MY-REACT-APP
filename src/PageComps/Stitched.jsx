import React from "react";
import "/src/App.css";
import Topstit from "./subcomps/SubStitches/Topstit";
import Sorts from "./subcomps/SubStitches/Sorts";
import MainStitched from "./subcomps/SubStitches/MainStitched";
function Stitched({onlyimg}) {
  return (
    <>
      <Topstit />
      <Sorts />
      <MainStitched theimage={onlyimg}/>
    </>
  );
}

export default Stitched;
