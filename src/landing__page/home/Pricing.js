import React from "react";

const Pricing = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-md-5 mb-4 mb-md-0">
          <h1 className="fs-2">Unbeatable pricing</h1>
          <p className="mt-3">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="text-primary fw-medium text-decoration-none">
            See pricing <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
          </a>
        </div>

        {/* Right Section */}
        <div className="col-md-7">
          <div className="d-flex justify-content-around text-center">
            <div>
              <h1 className="display-4 text-warning fw-bold">₹0</h1>
              <p className="mb-0">Free account</p>
              <p className="mb-0">opening</p>
            </div>
            <div>
              <h1 className="display-4 text-warning fw-bold">₹0</h1>
              <p className="mb-0">Free equity delivery</p>
              <p className="mb-0">and direct mutual funds</p>
            </div>
            <div>
              <h1 className="display-4 text-warning fw-bold">₹20</h1>
              <p className="mb-0">Intraday and</p>
              <p className="mb-0">F&amp;O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
