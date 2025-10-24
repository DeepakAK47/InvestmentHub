import React from 'react'

const QuestionAndAnswer = () => {
  return (
    <div className="container">
    <div className="row">
    <div className="col-1"></div>
    <div className="col-10">
      <h3>FAQs</h3>
      <hr></hr>

      <div class="faq-item">
  <details>
    <summary>
      <span class="question">What is a Zerodha account?</span>
    </summary>
    <div class="answer mt-3">
      A Zerodha account is a combined demat and trading account that allows investors to buy, sell, and hold securities digitally.
    </div>
  </details>
  <hr></hr>
</div>
 
    
         <div class="faq-item">
  <details>
    <summary>
      <span class="question">What documents are required to open a demat account?</span>
    </summary>
    <div class="answer">
      <p className="mt-3">The following documents are required to open a Zerodha account online:</p>
      <ol>
        <li>PAN number</li>
        <li>Aadhaar Card (Linked with a phone number for OTP verification)</li>
        <li>Cancelled cheque or bank account statement (To link your bank account)</li>
        <li>Income proof (Required only if you wish to trade in Futures & options)</li>
      </ol>
    </div>
  </details>
  <hr></hr>
</div>

        <div class="faq-item">
    <details>
      <summary>
        <span class="question">Is Zerodha account opening free?</span>
      </summary>
      <div class="answer mt-3">
        Yes, It is completely free.
      </div>
    </details>
    <hr></hr>
  </div>

      <div class="faq-item">
  <details>
    <summary>
      <span class="question">Are there any maintenance charges for a demat account?</span>
    </summary>
    <div class="answer mt-3">
    <p>The account maintaince charges is appliacable based on the account type.<br></br>
For Basic Services Demat Account: Zero charges if the holding value is less than ₹4,00,000.<br></br>
For non-Basic Services Demat Account demat accounts: ₹300 per year + GST.<br></br>
To learn more about BSDA,<a href="" style={{textDecoration:"none"}}>Click here.</a> </p>
    </div>
  </details>
  <hr></hr>
</div>

      <div class="faq-item">
  <details>
    <summary>
      <span class="question">Can I open a demat account without a bank account?</span>
    </summary>
    <div class="answer mt-3">
      <p>To open a demat account, you must have a bank account in your name.</p>
      <p>If UPI verification is completed successfully, no proof of bank is needed. However, if bank verification fails, you'll need to provide either a cancelled cheque or a bank statement to link your bank account to Zerodha.</p>
    </div>
  </details>
  <hr></hr>
</div>

    </div>
    <div className="col-1"></div>
    </div>
    </div>
  )
}

export default QuestionAndAnswer;

