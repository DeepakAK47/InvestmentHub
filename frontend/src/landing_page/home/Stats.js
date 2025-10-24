import React from "react"; 
import {useNavigate} from "react-router-dom";

function Stats() {
const navigate = useNavigate();

  return (
    <div className="container p-5">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5 text-muted">Trust with confidence</h1>
          <h3 className="fs-4 text-muted">Customer-first always</h3>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.
          </p>
          <h3 className="fs-4 text-muted">No spam or gimmicks</h3>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
            <br></br>
            <a href="/philosophies" style={{ textDecoration: "none" }}>
              Our philosophies
            </a>
          </p>
          <h3 className="fs-4 text-muted">The Zerodha universe</h3>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h3 className="fs-4 text-muted">Do better with money</h3>
          <p className="text-muted text-muted">
            With initiatives like{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Nudge
            </a>{" "}
            and{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Kill Switch
            </a>
            , we don't just facilitate transactions, but actively help you do
            better with your money.
          </p>
        </div>
        <div className="col-6 p-5">
          <a href="/product" style={{display : "inline-block"}}>  

          <img src="media/images/ecosystem.png" style={{ width: "120%" }} />
          </a>
          <div>
            <a href="/product " className="mx-5 " style={{ textDecoration: "none" }}>
              Explore our product <i class="fa-solid fa-arrow-right-long"></i>
            </a>
            <a href=" " style={{ textDecoration: "none" }}>
              Kite demo <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
        <img 
          src="media/Images/pressLogos.png"
          className="text-center mx-auto"
          onClick={()=> navigate('/media')}
          style={{ width: "60%", cursor : "pointer" }}
        />
      </div>
    </div>
  );
}

export default Stats;
