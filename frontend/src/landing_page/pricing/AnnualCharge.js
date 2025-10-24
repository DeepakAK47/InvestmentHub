import React from 'react';

const AnnualCharge = () => {
  return (
    <div className="container">
      <div className="row mb-5 mt-5">

        <div className="col-1"></div>
        <div className="col-10">
          <h4 className="text-muted mb-4">Demat AMC (Annual Maintenance Charge)</h4>
          
          {/* Table with proper borders */}
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th scope="col">Value of holdings</th>
                <th scope="col">	AMC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Up to ₹4 lakh</td>
                <td className="text-success">Free</td>
              </tr>
              <tr>
                <td>₹4 lakh - ₹10 lakh</td>
                <td className="">₹ 100 per year, charged quarterly*</td>
              </tr>
              <tr>
                <td>Above ₹10 lakh</td>
                <td className="">₹ 300 per year, charged quartlerly</td> {/* Green text for emphasis */}
              </tr>
            </tbody>
                <p className="small">* Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). BSDA account holders cannot hold more than one demat account. To learn more about BSDA,<a href="" style={{textDecoration : "none"}}>click here.</a> </p>
          </table>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
};

export default AnnualCharge;