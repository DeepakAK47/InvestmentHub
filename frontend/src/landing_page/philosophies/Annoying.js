import React from 'react'

const Annoying = () => {
  return (
    <div className="cotainer">
      <div className="row mb-5">
        <div className="col-1 me-3"></div>
      
      <div className="col-4 mt-5 mb-5">
        <img src="media/Images/privacy.svg" alt=""privacy-img/>
      </div>
      <div className="col-5">
        <h3 className="text-muted mt-5">No annoying user "engagement" spam</h3>
        <br></br>
                <p>We do not subject our customers to incessant push notifications, UI dark patterns, and gimmicks designed to "engage" them. In fact, we fundamentally do not believe in the idea of user "engagement" and instead practice what we call <a href="" style={{textDecoration:"none"}}>user-disengagement</a>. Apart from important operational and regulatory announcements, we have a rule of thumb of sending a maximum of 4 push notifications a month for product and business updates.</p>
      </div>
      <div className="col-1"></div>
      </div>
    </div>
  )
}

export default Annoying;
