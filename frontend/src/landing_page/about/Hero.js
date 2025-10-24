import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row">
        <div className="column">
          <h4 className="mt-5 mb-5 p-5  text-center text-muted">
            We pioneered the discount broking model in India.
            <br />
            Now, we are breaking ground with our technology.
          </h4>
          <hr />
        </div>
        <div className="col-1"></div>
        <div
          className="col-5 mt-5 p-5 mb-5  text-muted fs-6"
          style={{ lineHeight: "1.8", fontsize: "1.2em" }}
        >
          <p>
            We kick-started operations on the 15th of August, 2010 <br></br>with
            the goal of breaking all barriers that traders and<br></br>{" "}
            investors face in India in terms of cost, support, and<br></br>{" "}
            technology. We named the company Zerodha, a <br></br>combination of
            Zero and "Rodha", the Sanskrit word for barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house <br></br>
            technology have made us the biggest stock broker in <br></br>India.
          </p>
          <p>
            Over 1.6+ crore clients place billions of orders every year{" "}
            <br></br>through our powerful ecosystem of investment <br></br>
            platforms, contributing over 15% of all Indian retail<br></br>{" "}
            trading volumes.
          </p>
        </div>
        
        <div
          className="col-5 mt-5 p-5 mb-5 fs-6 text-muted"
          style={{ lineHeight: "1.8", fontsize: "1.2em" }}
        >
          <p>
            In addition, we run a number of popular open online <br></br>
            educational and community initiatives to empower retail <br></br>
            traders and investors.
          </p>
          <p>
            <a href="" style={{ textDecoration: "none" }}>
              Rainmatter{" "}
            </a>
            , our fintech fund and incubator, has invested<br></br> in several
            fintech startups with the goal of growing the <br></br>Indian
            capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. <br></br>Catch
            up on the latest updates on our{" "}
            <a href="" style={{ textDecoration: "none" }}>
              blog
            </a>{" "}
            or see what<br></br> the media is{" "}
            <a href="" style={{ textDecoration: "none" }}>
              saying about us
            </a>{" "}
            or learn more about our<br></br> business and product{" "}
            <a href="" style={{ textDecoration: "none" }}>
              philosophies
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
