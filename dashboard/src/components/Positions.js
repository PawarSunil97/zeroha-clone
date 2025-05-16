import React, { useEffect, useState } from "react";
import { POSITIONS } from "../appConstant";

const Positions = () => {
  const { HEADING, PRODUCT, INSTRUMENT, QTY, AVG, LTP, PL, CHG } = POSITIONS;

  const [allPosition, setAllPosition] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/allPosition")
      .then((res) => res.json()) 
      .then((data) => {
        setAllPosition(data);
      })
      .catch((err) => {
        console.error("Error fetching positions:", err);
      });
  }, []);

  return (
    <>
      <h3 className="title">
        {HEADING} ({allPosition.length})
      </h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>{PRODUCT}</th>
              <th>{INSTRUMENT}</th>
              <th>{QTY}</th>
              <th>{AVG}</th>
              <th>{LTP}</th>
              <th>{PL}</th>
              <th>{CHG}</th>
            </tr>
          </thead>
          <tbody>
            {allPosition.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
