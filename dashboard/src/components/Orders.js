import React from 'react'

import {Link} from "react-router-dom";

const Orders = () => {
  return (
   <div className="orders">
    <div className="no-orders">
          <div className="alert alert-warning mt-0 mb-3" role="alert" style={{width:"100%"}}>
⚠️ This is a demo platform with dummy data for the exploring the Zerodha Kite.
</div>
<p>You have not placed any orders today</p>
      <Link className="btn" to={"/"}> 
      Get Started
      </Link>
    </div>
   </div>
  );
};

export default Orders;