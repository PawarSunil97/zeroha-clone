import React from "react";

const Universe = ({
  firstPara,
  zerodhaInfo,
  heading,
  secondPara,
  imgZerodhaFound,
  imgSensBall,
  stieakLogo,
  goldenpiLogo,
  imgSmallCase,
  imgDitto,
  signUpButton,
}) => {
  return (
    <div className="container text-center mt-5 p-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <p className="fs-5">
            {firstPara}{" "}
            <a href="#" className="text-primary text-decoration-none">
              {zerodhaInfo}
            </a>
          </p>
          <h1
            className="fw-semibold display-5 mb-3"
            style={{ marginTop: "80px" }}
          >
            {heading}
          </h1>
          <p className="fs-5 mb-5 mt-4">{secondPara}</p>
        </div>
      </div>

      <div className="row justify-content-center mt-5 g-3">
        {[
          imgZerodhaFound,
          imgSensBall,
          stieakLogo,
          goldenpiLogo,
          imgSmallCase,
          imgDitto,
        ].map((logo, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4 d-flex justify-content-center align-items-center"
          >
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="img-fluid logo-img"
              style={{
                maxHeight: '60px', 
                objectFit: 'contain'
              }}
            />
          </div>
        ))}
      </div>

      <button
        style={{ width: "20%", margin: "0 auto" }}
        className="btn btn-primary mt-5 p-2 fs-5"
      >
        {signUpButton}
      </button>
    </div>
  );
};

export default Universe;
