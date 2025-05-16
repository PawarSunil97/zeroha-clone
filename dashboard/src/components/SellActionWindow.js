import React, { useState,useContext } from 'react'
import "./SellActionWindow.css";
import axios from 'axios';
import GeneralContext from './GeneralContext';
import moment from 'moment';
const SellActionWindow = ({uid}) => {
    const [stockQuantity,setStockQuantity]=useState(1);
    const [stockPrice,setStockPrice]=useState(0.0)
    const { closeSellWindow } = useContext(GeneralContext);
    const currentTime = moment().format("HH:mm:ss");
    const handleSellClick=()=>{
        axios.post("http://localhost:8080/newOrder",{
          name:uid,
          qty:stockQuantity,
          price:stockPrice,
          mode:"Sell",
          time:currentTime
        })
        closeSellWindow()
    }

    const handleCancelClick=()=>{
        closeSellWindow()
    }

    return (
        <div className="container sell-window" draggable="true">
          <div className="regular-order">
            <div className="inputs">
              <fieldset>
                <legend>Qty.</legend>
                <input
                  type="number"
                  name="qty"
                  onChange={(e) => setStockQuantity(e.target.value)}
                  value={stockQuantity}
                />
              </fieldset>
              <fieldset>
                <legend>Price</legend>
                <input
                  type="number"
                  name="price"
                  step="0.05"
                  onChange={(e) => setStockPrice(e.target.value)}
                  value={stockPrice}
                />
              </fieldset>
            </div>
          </div>
    
          <div className="buttons">
            <span>Est. credit ₹{stockQuantity * stockPrice}</span>
            <div>
            <button className="btn btn-red" onClick={handleSellClick}>Sell</button>
            <button className="btn btn-grey" onClick={handleCancelClick}>Cancel</button>
            </div>
          </div>
        </div>
      );
    
}

export default SellActionWindow