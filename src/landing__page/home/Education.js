import React from 'react';

const Education = () => {
  return (
    <div className="container py-5">
      <div className="row d-flex justify-content-around">
        {/* Left Section */}
        <div className="col-md-5 mb-4 mb-md-0 text-center">
          <img
            src="media/images/education.svg"
            alt="Education Illustration"
            className="img-fluid"
            style={{ width: '70%' }}
          />
        </div>

        {/* Right Section */}
        <div className="col-md-6 px-4">
          <h1 className="fs-2 mb-4">
            Free and open market education
          </h1>

          <p className="text-muted fs-5 mb-2">
            Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
          </p>
          <a
            href="#"
            className="text-primary text-decoration-none fw-semibold d-inline-block mb-4"
            style={{ fontSize: '1.1rem' }}
          >
            Varsity <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
          </a>

          <p className="text-muted fs-5 mb-2">
            TradingQ&A, the most active trading and investment community in India for all your market related queries.
          </p>
          <a
            href="#"
            className="text-primary text-decoration-none fw-semibold"
            style={{ fontSize: '1.1rem' }}
          >
            TradingQ&A <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
