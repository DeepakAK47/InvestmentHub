import React from "react";

import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="topbar-container" >
      <div className="indices-container">
        <div className="nifty">
          <p className="index ">NIFTY 50</p>
          <p className="index-points">{ 18181.75}</p>
          <p className="topbarfont">-104.75 (-0.57%)</p>
          <p className="percent"> </p>
        </div>
        <div className="sensex" >
          <p className="index">SENSEX</p>
          <p className="index-points">{61560.64}</p>
          <p className="topbarfont">-371.83 (-0.60%)</p>
          <p className="percent"></p>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default TopBar; 