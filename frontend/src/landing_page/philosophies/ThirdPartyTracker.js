import React from 'react'

const ThirdPartyTracker = () => {
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-1"></div>

        <div className="col-4 mb-5">
          <img src="media/Images/no-tracking.svg"/>
        </div>

        <div className="col-6 mt-5 mb-5">
        <h3 className="text-muted mt-5">No third party trackers</h3>
        <br></br>
        <p className="mb-5">We don’t use third-party marketing "pixels" or trackers that are usually used for behavioural tracking and profiling. On our websites, we use on-premise self-hosted tools for basic anonymised statistics. We don’t follow our customers around the internet via third-party trackers.</p>
        </div>
        <div className="col-0"></div>
      </div>
    </div>
  )
}

export default ThirdPartyTracker;