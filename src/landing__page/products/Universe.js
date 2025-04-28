import React from 'react';

const Universe = ({
  firstPara,
  zerodhaInfo,
  heading,
  secondPara,
  imgZerodhaFound,
  imgSensBall,
  stieakLogo,
  imgSmallCase,
  imgDitto,
  signUpButton
}) => {
  return (
    <div className="container text-center mt-5 p-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <p className="fs-5">
            {firstPara}{' '}
            <a href="#" className="text-primary text-decoration-none">
              {zerodhaInfo}
            </a>
          </p>
          <h1 className="fw-semibold display-5 mb-3" style={{ marginTop: '80px' }}>
            {heading}
          </h1>
          <p className="fs-5 mb-5">{secondPara}</p>
        </div>
      </div>

      <div className="row justify-content-center mt-5 g-4">
        <div className="col-6 col-md-4 col-lg-2">
          <img src={imgZerodhaFound} alt="Zerodha Fund House" className="img-fluid" />
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <img src={imgSensBall} alt="Sensibull" className="img-fluid" />
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <img src={stieakLogo} alt="Streak" className="img-fluid" />
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <img src={imgSmallCase} alt="Smallcase" className="img-fluid" />
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <img src={imgDitto} alt="Ditto" className="img-fluid" />
        </div>

      </div>
      <button style={{width:"20%", margin:"0 auto",}} className='btn btn-primary mt-5 p-2 fs-5'>{signUpButton}</button>
    </div>
  );
};

export default Universe;
