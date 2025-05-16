import React from "react";

const Stats = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        
        {/* Left Column - Text */}
        <div className="col-md-6 px-4">
          <h1 className="fs-3 fw-bold mb-4">Trust with confidence</h1>

          <h5 className="fs-5 mt-4">Customer-first always</h5>
          <p className="text-muted">
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity
            investments and contribute to 15% of daily retail exchange volumes in India.
          </p>

          <h5 className="fs-5 mt-4">No spam or gimmicks</h5>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h5 className="fs-5 mt-4">The Zerodha universe</h5>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments...
          </p>
        </div>

        {/* Right Column - Image + CTA Links */}
        <div className="col-md-6 px-4 text-center">
          <img
            src="/media/images/ecosystem.png" 
            alt="Ecosystem"
            className="img-fluid mb-4"
            style={{ maxWidth: "75%" }}
          />

          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <a href="#" className="text-decoration-none fw-medium">
              Explore our products <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
            </a>
            <a href="#" className="text-decoration-none fw-medium">
              Try Kite demo <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
