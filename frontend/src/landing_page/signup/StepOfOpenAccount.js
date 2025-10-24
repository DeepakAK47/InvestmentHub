import React from "react";

function StepOfOpenAccount() {
  return (
    <div className="bg-light" style={{ height: "450px" }}>
      <div className="container mb-5">
        <div className="row mb-5">
          <h3 className="text-center mt-5 mb-5 text-muted">
            Steps to open a demat account with Zerodha
          </h3>
          <div className="col-2 mb-5"></div>
          <div className="col-4 mb-5">
            <img src="media/Images/5.svg" className="mt-5 mx-3" />
          </div>
          <div className="col-4 p-5 mt-5text-muted">
            <ol>
              <h4>1.Enter the requested details</h4>
              <hr></hr>
              <h4>2.Complete e-sign & verification</h4>
              <hr></hr>
              <h4>3.Start investing!</h4>
            </ol>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
}

export default StepOfOpenAccount;
