import React from "react";

function Hero() {
  return (
    <div className="container-fluid" id="supportHero">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-5 p-5">
          <a
            href=""
            className=""
            style={{ textDecoration: "none", color: "white" }}
          >
            <h2 className="mt-5 mb-3 fs-3">Support Portal</h2>
          </a>
          <h3 className="mb-5">
            Search for an answer or browse help topics to create a ticket
          </h3>
          <input
            className=" "
            style={{
              width: "90%",
              lineHeight: "80%",
              height: "48px",
              borderRadius: "10px",
            }}
            placeholder="Eg. how do i activate F&O, Why is my order getting rejected... "
          />
          <div className="d-flex gap-3">
            <a href="" className="" style={{ color: "white" }}>
              <h5 className="mt-3">Track account opening</h5>
            </a>
            <a href="" style={{ color: "white" }}>
              <h5 className="mt-3 mb-4"> Track segment activation</h5>
            </a>
            <a href="" style={{ color: "white" }}>
              <h5 className="mt-3 mb-4"> Intraday margins</h5>
            </a>
          </div>
          <a href="" style={{ color: "white" }}>
            <h5 className=" mb-5">Kite user manual</h5>
          </a>
        </div>
        <div className="col-4 p-5">
          <a
            href=""
            style={{ textDecoration: "", color: "white", marginLeft: "-50px" }}
          >
            <h5 className="mt-5 mb-5">Track tickets</h5>
          </a>
          <h3>Featured</h3>
          <ol>
            <a href="" style={{ color: "white" }}>
              {" "}
              <li className="mt-3 mb-4">
                Exclusion of F&O contracts on 8 securities from <br></br>August
                29, 2025
              </li>
            </a>
            <a href="" style={{ color: "white" }}>
              {" "}
              <li className="mt-3 mb-5">
                Revision in expiry day of Index and Stock <br></br>derivatives
                contracts
              </li>
            </a>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
