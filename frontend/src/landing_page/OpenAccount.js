import React from "react";
import {useNavigate} from "react-router-dom";  // Import the hook


function OpenAccount() {
const navigate  = useNavigate();    // Initializing hook
const  handleSignUpClick = () => {
  navigate("/signup");   // redirect signup
  window.scrollTo(0,0);  // it is responsible scroll the page at the top if you are still in the signup page.
};


  return (
    <div className="container ">
      <div className="row text-muted">
        <h5 className="text-muted mb-3 text-center mt-5 ">Open a Zerodha account</h5>
        <p className=" text-muted mb-3 mt-3 text-center">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
         onClick={handleSignUpClick}
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up Now
        </button>
        <br></br>
        <button className="p-2 btn btn-primary fs-5 mb-5 mt-3"  style={{ width: "20%", margin: "0 auto" }} >Explore Dashboard</button>
      </div>
    </div>
  );
}

export default OpenAccount;

// Note -> !Important
