import React from 'react'

const explained = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-1"></div>


        <div className="col-5">
          <h4 className="text-muted mb-5">Charges explained</h4>
          <p className="mb-3"> Securities/Commodities transaction tax</p>
          <p className="small mb-3">Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>
          <p className="small mb-3">When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>
          <p className="mb-3">Transaction/Turnover Charges</p>
          <p className="mb-3 small">Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
          <p className="mb-3 small">BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
           <p className="mb-3 small">BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>
            <p className="mb-3 small">BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
             <p className="mb-3 small">BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>
               <p className="mb-3">Call & trade</p>
                <p className="mb-3 small">Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>
                <p className="mb-3">Stamp charges</p>
                 <p className="mb-3 small">Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>
                  <p className="mb-3">NRI brokerage charges</p>
                  <ul>
                    <li className="small mb-1">₹100 per order for futures and options.</li>
                    <li className="small mb-1">For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                    <li className="small mb-1">For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                    <li className="small mb-1">₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                  </ul>
                      <p className="mb-3">Account with debit balance</p>
                      <p className="mb-3 small">If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>
                      <p className="mb-3">Charges for Investor's Protection Fund Trust (IPFT) by NSE</p>
                      <ul>
                        <li className="small mb-1">Equity and Futures - ₹10 per crore + GST of the traded value.</li>
                         <li className="small mb-1">Options - ₹50 per crore + GST traded value (premium value).</li>
                          <li className="small mb-1">Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
                      </ul>
                      <p className="mb-3">Margin Trading Facility (MTF)</p>
                      <ul>
                        <li className="small mb-1">MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
                        <li className="small mb-1">MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
                        <li className="small mb-1">MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
                      </ul>
        </div>



        <div className="col-5">
                             <p className="mb-3 small">GST</p>
                             <p className="mb-3">Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>
                                <p className="mb-3">SEBI Charges</p>
              <p className="mb-3 small">Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>
                                  <p className="mb-3">DP (Depository participant) charges</p>
              
                <p className="mb-3 small">₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
                <p className="mb-3 small">Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
                <p className="mb-3 small">Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.

</p>

  <p className="mb-3">Pledging charges</p>
              <p className="mb-3 small">₹30 + GST per pledge request per ISIN.</p>
               <p className="mb-3">AMC (Account maintenance charges)</p>
              <p className="mb-3 small">For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA<a href="" className="small" style={{textDecoration : "none"}}>, Click here</a></p>
               <p className="mb-3 small">For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC,<a href="" className="small" style={{textDecoration : "none"}}>, Click here</a></p>
               <p className="mb-3">Corporate action order charges</p>
              <p className="mb-3 small">₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>
              <p className="mb-3">Off-market transfer charges</p>
              <p className="mb-3 small">₹25 per transaction.</p>
              <p className="mb-3">Physical CMR request</p>
              <p className="mb-3 small">First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</p>
              <p className="mb-3">Payment gateway charges</p>
              <p className="mb-3 small">₹9 + GST (Not levied on transfers done via UPI)</p>
              <p className="mb-3">Delayed Payment Charges</p>
              <p className="mb-3 small">Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account<a href="" className="small" style={{textDecoration : "none"}}> Learn more.</a></p>
 <p className="mb-3">Trading using 3-in-1 account with block functionality</p>
<ul>
  <li className="small mb-1">Delivery & MTF Brokerage: 0.5% per executed order.</li>
   <li className="small mb-1">Intraday Brokerage: 0.05% per executed order.</li>
</ul> 
          
        </div>
      </div>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <p className="mb-3">Disclaimer</p>
          <p className="small mb-5">For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
        </div>
      </div>
    </div>
  )
}

export default explained;