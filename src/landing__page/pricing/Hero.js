import React from "react";

const Hero = ({
  pricingheading,
  para,
  imgPricing0,
  headingPricing0,
  paraPricing0,
  imgIntraday,
  headingIntraday,
  paraIntraday,
  imgDirectMf,
  headingDirectMf,
  paraDirectMf,
}) => {
  return (
    <div className="container py-5">
      {/* Header Section */}
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "70vh" }}
      >
        <div className="text-center">
          <h1 className="fs-1 mb-2">{pricingheading}</h1>
          <p className="text-muted fs-5 mb-0 mt-3">{para}</p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="row d-flex justify-content-around text-center">
        <div className="col-4 col-md-4 mb-4">
          <img
            src={imgPricing0}
            style={{ width: "280px", height: "auto" }}
            alt="pricing0"
          />
          <h1 className=" fs-2 mb-2">{headingPricing0}</h1>
          <p className="text-muted fs-5 mb-0">{paraPricing0}</p>
        </div>
        <div className="col-4 col-md-4 mb-4">
          <img
            src={imgIntraday}
            style={{ width: "280px", height: "auto" }}
            alt="intraday"
          />
          <h1 className="fs-2 mb-2">{headingIntraday}</h1>
          <p className="text-muted fs-5 mb-0">{paraIntraday}</p>
        </div>
        <div className="col-4 col-md-4 mb-4">
          <img
            src={imgDirectMf}
            style={{ width: "280px", height: "auto" }}
            alt="direct Mf"
          />
          <h1 className="fs-2 mb-2">{headingDirectMf}</h1>
          <p className="text-muted fs-5 mb-0">{paraDirectMf}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
