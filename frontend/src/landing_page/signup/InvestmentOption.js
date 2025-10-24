import React from "react";

function InvestmentOptions() {
  return (
    <div className="container mb-5">
      <div className="row">
        <h3 className="text-center mb-5 text-muted">
          Investment options with Zerodha demat account
        </h3>
        <div className="col-1"></div>
        <div className="col-2 mt-5">
          <img src="media/Images/1.svg" class=" d-block mb-5  "></img>
          <img src="media/Images/2.svg"></img>
        </div>
        <div className="col-2 mt-3">
          <h5 className="mt-3 mb-2 text-muted">Stocks</h5>
          <p className="text-muted mb-5">
            Invest in all exchange-listed securities
          </p>
          <h5 className="text-muted">IPO</h5>
          <p className="text-muted">
            Apply to the latest IPOs instantly via UPI
          </p>
        </div>
        <div className="col-1"></div>
        <div className="col-2 mt-5">
          <img className="d-block mb-5" src="media/Images/3.svg"></img>
          <img src="media/Images/4.svg"></img>
        </div>
        <div className="col-2 mt-5 mb-5">
          <h5 className="text-muted">Mutual funds</h5>
          <p className="text-muted mb-5">
            Invest in commission-free direct mutual funds
          </p>
          <h5 className="text-muted">Futures & options</h5>
          <p className="text-muted">
            Hedge and mitigate market risk through simplified F&O trading
          </p>
        </div>
        <div className="col-1"></div>
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-primary mb-5" 
            style={{ width: "20%", height: "60%" }}
          >
            Explore Investments
          </button>
        </div>
      </div>
    </div>
  );
}

export default InvestmentOptions;
