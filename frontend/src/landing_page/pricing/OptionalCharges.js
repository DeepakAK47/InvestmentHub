import React from 'react';

const OptionalCharges = () => {
  return (
    <div className="container">
      <div className="row mb-5 mt-5">

        <div className="col-1"></div>
        <div className="col-10">
          <h4 className="text-muted mb-4">Charges for optional value added services</h4>
          
          {/* Table with proper borders */}
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th scope="col">Service</th>
                <th scope="col">Billing Frquency</th>
                <th scope="col">Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tickertape</td>
                <td className="">Monthly / Annual</td>
                <td>Free: 0 | Pro: 249/2399</td>
              </tr>
              <tr>
                <td>Smallcase</td>
                <td className="">	Per transaction</td>
                <td>Buy & Invest More: 100 | SIP: 10</td>
              </tr>
              <tr>
                <td>Kite Connect</td>
                <td className="">Monthly</td> {/* Green text for emphasis */}
                <td>Monthly</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
};

export default OptionalCharges;