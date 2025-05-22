import React, { useState } from 'react';

const KiteLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="kite-container">
      <div className="kite-card">
        {/* Logo */}
        <div className="kite-logo">
          <div className="kite-logo-main"></div>
          <div className="kite-logo-inner"></div>
        </div>

        {/* Title */}
        <h2 className="kite-title">Login to Kite</h2>

        {/* Form */}
        <form className="kite-form">
          <input
            type="text"
            placeholder="Phone number or User ID"
            className="kite-input"
          />
          <div className="kite-password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="kite-input"
            />
            <span
              className="kite-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁️
            </span>
          </div>

          <button type="submit" className="kite-button">
            Login
          </button>
        </form>

        <div className="kite-footer">
          <a href="#">Forgot user ID or password?</a>
        </div>
      </div>
    </div>
  );
};

export default KiteLogin;
