import React from "react";

function RightSection({ productName, productDesription, learnMore, imageURL }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-1"></div>
        <div class="col-5 p-5 mt-5 ">
          <h1 className=" mt-5 extra-margin-top text-muted">{productName}</h1>
          <p className="mt-3 text-muted">{productDesription}</p>
          <a href={learnMore} style={{ textDecoration: "none" }}>
            learn More <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

        <div class="col-5">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
