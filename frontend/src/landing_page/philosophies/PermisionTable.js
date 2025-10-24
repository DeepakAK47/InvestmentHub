import React from 'react'

const PermisionTable = () => {
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-1"></div>
        <div className="col-10 mb-5">
          <p>Want to check what permissions your apps have? &nbsp;&nbsp;&nbsp;
            <a href="" style={{textDecoration : "none"}}>Android &nbsp;<i class="fa-solid fa-arrow-right"></i>&nbsp;&nbsp; &nbsp;&nbsp;     <a href="" style={{textDecoration:"none"}}>iOS &nbsp;&nbsp;</a><i class="fa-solid fa-arrow-right"></i>   </a>
             </p>
             <br></br>


              <table class="table table-striped table-bordered">
  <thead className="table-light">
    <tr>

      <th scope="col">Permission</th>
      <th scope="col">Kite (trading)</th>
      <th scope="col">	Coin (mutual funds)</th>
    </tr>
  </thead>
  <tbody>
    <tr>

      <td>Storage</td>
      <td>(Optional) For profile picture selection.</td>
      <td>(Optional) For downloading reports.</td>
    </tr>
    <tr>

      <td>SMS</td>
      <td>–</td>
      <td>(Optional) For UPI registration.</td>
    </tr>

      <tr>

      <td>Telephone</td>
      <td>-</td>
      <td>(Optional) For UPI registration.</td>
    </tr>

      <tr>

      <td>Camera</td>
      <td>(Optional) For profile picture selection.</td>
      <td>	(Optional) For UPI QR scanning.</td>
    </tr>

      <tr>

      <td>Network access</td>
      <td>Elementary</td>
      <td>Elementary</td>
    </tr>

      <tr>

      <td>View network connections</td>
      <td>To check network status</td>
      <td>	To check network status</td>
    </tr>

      <tr>

      <td>Use biometric hardware</td>
      <td>For biometric 2Factor authentication.</td>
      <td>For biometric 2Factor authentication.</td>
    </tr>

      <tr>

      <td>Show notifications</td>
      <td>To receive and show FCM notifications</td>
      <td>To receive and show FCM notifications</td>
    </tr>

      <tr>

      <td>Ask to ignore battery optimisations</td>
      <td>(Optional) To stream live market data in the background</td>
      <td>-</td>
    </tr>


    <tr>

      <td>Prevent phone from sleeping</td>
      <td>	To keep the phone from sleeping when live charts are being viewed</td>
      <td>-</td>
    </tr>
  </tbody>  

</table>

         <p className="text-center">	*We use Firebase for crash reporting, which is in the process of being replaced with a self-hosted solution.</p>


        </div>
      </div>
    </div>
  )
}

export default PermisionTable;

