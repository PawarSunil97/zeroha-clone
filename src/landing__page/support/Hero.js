import React from "react";

const Hero = ({
  supportPortal,
  trackTickets,
  leftHeading,
  placeholder,
  trackAccountOpening,
  trackSegmentActivation,
  intradayMargins,
  kiteUserManual,
  featured,
  currentTakeoversAndDelisting,
  rightEntitlementsListing,
}) => {
  return (
    <div
      style={{
        backgroundColor: "#387ed1",
        minHeight: "100vh",
        padding: "100px",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-between">
            <h1 className="fs-5 text-light py-5">{supportPortal}</h1>
            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "underline",
                fontSize: "14px",
              }}
            >
              <h2 className="fs-5 text-light py-5">{trackTickets}</h2>
            </a>
          </div>
          <div className="col-6">
            <h1 className="fs-4 text-light">{leftHeading}</h1>
            <div
              className="input-group mt-5 mb-4"
              style={{ maxWidth: "600px" }}
            >
              <input
                type="text"
                className="form-control"
                placeholder={placeholder}
                style={{
                  borderRadius: "6px 0px 0px",
                  padding: "12px 15px",
                  fontSize: "16px",
                  border: "none",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              />
              <span
                className="input-group-text"
                style={{
                  background: "white",
                  borderRadius: "0 6px 6px 0",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                🔍
              </span>
            </div>
            <div className="d-flex flex-wrap gap-4">
              <a
                href="#"
                style={{
                  color: "white",
                  textDecoration: "underline",
                  fontSize: "16px",
                }}
              >
                {trackAccountOpening}
              </a>
              <a
                href="#"
                style={{
                  color: "white",
                  textDecoration: "underline",
                  fontSize: "16px",
                }}
              >
                {trackSegmentActivation}
              </a>
              <a
                href="#"
                style={{
                  color: "white",
                  textDecoration: "underline",
                  fontSize: "16px",
                }}
              >
                {intradayMargins}
              </a>
              <a
                href="#"
                style={{
                  color: "white",
                  textDecoration: "underline",
                  fontSize: "16px",
                }}
              >
                {kiteUserManual}
              </a>
            </div>
          </div>
          <div className="col-4" style={{ margin: "50px" }}>
            <h1 className="fs-4 text-light">{featured}</h1>
            <ol>
              <a
                href="#"
                style={{
                  color: "white",
                  textDecoration: "underline",
                }}
              >
                <li className="text-light">{currentTakeoversAndDelisting}</li>
              </a>

              <a
                href="#"
                style={{
                  color: "white",
                  textDecoration: "underline",
                }}
              >
                <li className="text-light">{rightEntitlementsListing}</li>
              </a>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
