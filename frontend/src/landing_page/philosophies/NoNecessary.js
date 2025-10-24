import React from 'react'

const NoNecessary = () => {
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-1"></div>

        <div className="col-4 mb-5">
          <img src="media/Images/no-crossselling.svg"/>
        </div>

        <div className="col-6  mb-5">
        <h3 className="text-muted mt-5">No unnecessary cross-selling</h3>
        <br></br>
        <p className="mb-5">We don't cross-sell personal loans, aggressively push leveraged products, or hawk unrelated financial or other offerings that are not meaningful to customers' trading and investing experience. We are not in the business of monetizing user attention.</p>
        </div>
        <div className="col-0"></div>
      </div>
    </div>
  )
}

export default NoNecessary;