import React from 'react';

const OpeningCharge = () => {
  return (
    <div className="container">
      <div className="row mb-5 mt-5">
        <h4 className="text-center text-muted mb-5">
          <a href=" " style={{textDecoration:"none"}}>
            Calculate your costs&nbsp;
          </a>upfront using our brokerage calculator
        </h4>

        <div className="col-1"></div>
        <div className="col-10">
          <h4 className="text-muted">Charges for account opening</h4>
          
          {/* Table with proper borders */}
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th scope="col">Type of account</th>
                <th scope="col">Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Online account</td>
                <td className="text-success">Free</td>
              </tr>
              <tr>
                <td>Offline account</td>
                <td className="text-success">Free</td>
              </tr>
              <tr>
                <td>NRI account (offline only)</td>
                <td className="">₹ 500</td> {/* Green text for emphasis */}
              </tr>
              <tr>
                <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                <td>₹ 500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
};

export default OpeningCharge;