import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./OpenOrders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/orders")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch orders:", err);
      });
  }, []);

  return (
    <div className="orders">
      <h3>Open orders ({orders.length})</h3>
      {orders.length === 0 ? (
        <p className="no-orders">You haven't placed any orders today</p>
      ) : (
        <div className="order-table">
        <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Type</th>
            <th>Stock</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => (
            <tr key={i}>
              <td>{order.time || "-"}</td>
              <td>
                <span className={`type-tag ${order.mode.toLowerCase()}`}>
                  {order.mode}
                </span>
              </td>
              <td>{order.name}</td>
              <td>0 / {order.qty}</td>
              <td>
                ₹{order.price}
                {order.triggerPrice && ` / ₹${order.triggerPrice} trg.`}
              </td>
              <td>
                <span className="status-btn">
                  {order.status || "OPEN"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
          </div>
      
      )}
    </div>
  );
};

export default Orders;
