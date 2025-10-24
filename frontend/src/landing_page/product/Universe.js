import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row">
        <div className="row">
          <h5 className="text-center mt-5 p-5 text-muted">
            Want to know more about our technology stack? Check out the{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Zerodha.tech
            </a>{" "}
            blog.
          </h5>
        </div>
        <div className="row">
          <h4 className="mt-3 p-3 text-center text-muted">The Zerodha Universe</h4>
          <p className="mb-5 p-3 text-center">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>

        <div className="col-2"></div>
        <div className="col-3 mt -5 p-5">
          <img
            src="media/Images/zerodhaFundhouse.png"
            className=""
            style={{ width: "50%" }}
          />
          <p className="p-3 mb-5">Our asset managemnet</p>
          <img src="media/Images/streakLogo.png" style={{ width: "50%" }} />
          <p className="p-3">Systematic platform</p>
        </div>
        <div className="col-3 mt -5 p-5">
          <img
            src="media/Images/sensibullLogo.svg"
            className=""
            style={{ width: "50%" }}
          />
          <p className="p-3 mb-5">Option trading platform</p>
          <img src="media/Images/smallcaseLogo.png" style={{ width: "50%" }} />
          <p className="p-3">Thematic investment platform</p>
        </div>
        <div className="col-3 mt -5 p-5">
          <img
            src="media/Images/zerodhaFundhouse.png"
            className=""
            style={{ width: "50%" }}
          />
          <p className="p-3 mb-5">Our asset managemnet</p>
          <img src="media/Images/dittoLogo.png" style={{ width: "50%" }} />
          <p className="p-3">Persenalized advice</p>
        </div>
         <div className="col-1"></div>



      </div>
    </div>
  );
}

export default Universe;
