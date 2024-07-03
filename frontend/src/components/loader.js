import React, { useEffect } from "react";
import loadGift from "../assets/images/loadgift.gif"


const Loader = () => {
 return(
  <div style={{ width: "100%", textAlign: "center" }}>
    <img
      src={loadGift}
      alt="image"
      style={{ width: "200px", margin: "100px" }}
    />
  </div>
 )
};

export default Loader;
