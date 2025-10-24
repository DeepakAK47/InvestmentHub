import React from "react";

function SignUpNow() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-0"></div>
        <div className="col-4">
          <img
            src="media/Images/account_open.svg"
            className="responsive-image1 me-5"
          />
        </div>
        <div className="col-2"></div>
        <div className="col-6 mr-5">
          <h3 className="mb-3 text-muted">Signup now</h3>
          <p className="text-body-tertiary mb-3">
            Or track your existing application
          </p>
          <div class="input-group mb-3" style={{ width: "45%" , height : "10%" }}>
            <span class="input-group-text" id="basic-addon1" style={{width:"", height:"95%"}}>
              +91
            </span>
            <input
              type="text"
              class="form-control mb-3"
              style={{ width: "" , height : "" }}
              placeholder="Eneter your Mobile Number " 
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <button
            type="button"
            class="btn btn-primary "
            style={{ width: "40%", height: "10%" }}
          >
            <h5>Get OTP</h5>
          </button>
          <p className="mt-5 mb-5 text-muted">
            {" "}
            By proceeding, you agree to the Zerodha{" "}
            <a href="" style={{ textDecoration: "none" }} text-muted>
              terms{" "}
            </a>
            &{" "}
            <a href="" style={{ textDecoration: "none" }}>
              privacy policy
            </a>
          </p>
        </div>
        <div className="col-0"></div>
      </div>  
    </div>
  );
}

export default SignUpNow;
