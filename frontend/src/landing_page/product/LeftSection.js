import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-5 mt-3">
          <img src={imageURL} />
        </div>
        <div className="col-1"></div>
        <div className="col-5 p-2">
          <h3 className="text-muted">{productName}</h3>
          <p className="text-muted">{productDesription}</p>
          <div className="p-3">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              TryDemo <i class="fa-solid fa-arrow-right-long"></i>
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "50px", textDecoration: "none" }}
            >
              learnMore <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/Images/appstoreBadge.svg" />
            </a>
            <a href={appStore} style={{ marginLeft: "50px" }}>
              <img src="media/Images/googlePlayBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
