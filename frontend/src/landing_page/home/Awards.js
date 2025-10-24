import React from "react";
function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src="media/Images/largestBroker.svg" alt="Award Image" />
        </div>
        <div className="col-6 p-5 mt-3">
          <h1>Largest Stock Broker in India</h1>
          <p className="mb-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6 ">
              <ul>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <li>Stocks & IPOs</li>
              <li>Direct mutual funds</li>
              <li>Bonds and Gov...</li>
            </div>
          </div>
          {/* <img src="media/Images/pressLogos.png" style={{width:"90%"}} /> */}
        </div>
      </div>
    </div>
  );
}

export default Awards;
