import React from "react";

const RightSection = ({
  imageUrl,
  productName,
  productDescription,
  learnMore,
  imgAlt,
}) => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-md-6">
          <h1>{productName}</h1>
          <p style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
            {productDescription}
          </p>
          <div>
            <a
              href="#"
              className="text-primary fw-semibold text-decoration-none"
            >
              {learnMore}
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-md-6 text-center">
          <img
            src={imageUrl}
            alt={imgAlt}
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
