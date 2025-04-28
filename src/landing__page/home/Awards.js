import React from "react";

const Awards = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src="media/images/largestBroker.svg" />
        </div>
        <div className="col-6">
          <div className="container my-5">
            <div className="text-center mb-4">
              <h2>Largest stock broker in India</h2>
              <p className="lead">
                2+ million Zerodha clients contribute to over 15% of all retail
                order volumes in India daily by trading and investing in:
              </p>
            </div>
            <div className="row m-5">
              <div className="col-md-6">
                <ul className="mb-0">
                  <li>Futures and Options</li>
                  <li>Commodity derivatives</li>
                  <li>Currency derivatives</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="mb-0">
                  <li>Stocks & IPOs</li>
                  <li>Direct mutual funds</li>
                  <li>Bonds and Government securities</li>
                </ul>
              </div>
              <img src="media\images\pressLogos.png" alt="pressLogos" style={{width:"80%"}} className="mt-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
