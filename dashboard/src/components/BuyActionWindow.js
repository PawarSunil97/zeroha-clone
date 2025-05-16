import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import GeneralContext from "./GeneralContext";
import moment from "moment";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const { closeBuyWindow } = useContext(GeneralContext);
  const handleBuyClick = async () => {
    const currentTime = moment().format("HH:mm:ss"); // ✅ Moved inside the function
    try {
      const response = await axios.post("http://localhost:8080/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
        time: currentTime,
      });
      console.log("Order saved:", response.data);
    } catch (err) {
      console.error("Failed to save order:", err);
    }
    closeBuyWindow();
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
