import React from 'react'

const InputSection = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-4"></div>
            <div className="col-6">
                 <input placeholder="Search By title or publisher " className="me-5 text-muted text-center mb-3" style={{width:"45%",height:"120%",borderRadius:"5%"}}></input>
            </div>
        </div>
    </div>
  )
}

export default InputSection;