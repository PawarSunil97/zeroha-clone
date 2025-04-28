import React from 'react';

export const Hero = () => {
  return (
    <div className="container text-center mt-5  p-5">
      <h1 className="fw-semibold display-5 mb-3 mt-5">Zerodha Products</h1>
      <h2 className="text-muted fs-4 mb-4">
        Sleek, modern, and intuitive trading platforms
      </h2>
      <p className="fs-5">
        Check out our{' '}
        <a href="#" className="text-primary text-decoration-none">
          investment offerings →
        </a>
      </p>
    </div>
  );
};
