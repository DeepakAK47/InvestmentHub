import React from "react"; 
import {useNavigate} from "react-router-dom";  // Import the hook

function Hero() {
const navigate  = useNavigate();    // Initializing hook
const  handleSignUpClick = () => {
  navigate("/signup");   // redirect signup
};

  return (
    <div className="container p-5">
      <div className="row text-center">
        <img
          src="media/Images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
          style={{ width: "70%", heigth: "auto", margin: "0 auto" }}
        />
        <h2 className="mt-5 text-muted mb-3">Invest in everything</h2>
        <h5 className="text-muted mb-5">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </h5>
        <button
        onClick={handleSignUpClick}
          className="p-2 btn btn-primary fs-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
   