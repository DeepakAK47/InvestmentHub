import React from 'react';

const BenefitSection = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-1"></div>
            <div className="col-5 text-muted mt-lg-5 mb-lg-5">
                <img src="media/Images/BenefitSection.svg" style={{width:"100%",height : "100%"}}/>
                <h4 className="">Benefits of opening a Zerodha demat account</h4>
            </div>
            <div className="col-6 mt-5 text-muted">
                <h5 className="mb-3">Unbeatable pricing</h5>
                <p className="mb-5">Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.</p>
                <h5 className="mb-3">Best investing experience</h5>
                <p className="mb-5">Simple and intuitive trading platform with an easy-to-understand user interface.</p>
                 <h5 className="mb-3">No spam or gimmicks</h5>
                <p className="mb-5">Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.</p>
                 <h5 className="mb-3">The Zerodha universe</h5>
                <p className="mb-5">More than just an app — gain free access to the entire ecosystem of our partner products.</p>
            </div>
        </div>
    </div>
  )
}

export default BenefitSection;