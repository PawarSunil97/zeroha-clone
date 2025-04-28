import React from "react";

const LeftSection = ({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlayImg,
  googlePlayAlt,
  appStoreImg,
  appStoreAlt
}) => { 
  return (
    <div className="container">
      <div className="row ">
        <div className="col-5">
          <img src={imageUrl} />
        </div>
        <div className="col-2"></div>
        <div className="col-5 mt-5 p-4">
          <h1>{productName}</h1>
          <p style={{ lineHeight: "1.8", fontSize: "1.2em" }}>{productDescription}</p>
          <div className="mb-4 d-flex flex-column flex-sm-row gap-3">

          <a href="" className="text-primary fw-semibold text-decoration-none">{tryDemo}</a>
          <a href="" className="text-primary fw-semibold text-decoration-none">{learnMore}</a>
          </div>
          <div className="d-flex gap-3">

          <a href="">
            <img src={googlePlayImg} alt={googlePlayAlt} />
          </a>
          <a href="">
            {" "}
            <img src={appStoreImg} alt={appStoreAlt} />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
