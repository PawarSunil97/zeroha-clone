import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ Prevent default form submission

    if (!otpSent) {
      await sendOtp();
    } else {
      await verifyOtp();
    }
  };

  const sendOtp = async () => {
    // const formattedPhone = `${phone}`;
    try {
      const response = await axios.post(
        "http://localhost:8080/api/getotp/send",
        { phoneNumber: phone }
      );
      if (response.status === 200 && response.data.message) {
        setOtpSent(true);
        setMessage(response.data.message);
      } else {
        setMessage("Unexpected response format.");
      }
    } catch (err) {
      console.error("Send OTP error:", err);
      setMessage(err.response?.data?.message || "Failed to send OTP");
    }
  };

  const verifyOtp = async () => {
    try {
      const res = await axios.post("http://localhost:8080/api/getotp/verify", {
        countryCode: "+91",
        phoneNumber: phone,
        otp,
      });

      setMessage(res.data.message);
      navigate("/Kitelogin");
    } catch (err) {
      setMessage(err.response?.data?.message || "OTP verification failed");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row py-5">
        <h1>Open a free demat and trading account online</h1>
        <p className="lead my-4">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>
      <div className="row py-5">
        <div className="col-md-7">
          <img
            src="media/images/signup.png"
            alt="Zerodha Kite and Console"
            className="img-fluid"
          />
        </div>
        <div className="col-md-5">
          <div className="card p-5">
            <h2 className="mb-3">Signup now</h2>
            <p className="mb-4 text-muted">
              Or track your existing application
            </p>
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <span className="input-group-text">+91</span>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter your mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              {otpSent && (
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                  />
                </div>
              )}

              <button type="submit" className="btn btn-primary w-100">
                {otpSent ? "Verify OTP" : "Get OTP"}
              </button>
            </form>

            {message && <div className="alert alert-info mt-3">{message}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
