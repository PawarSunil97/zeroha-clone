import React, { useState, useEffect } from "react";
// import { VerticalGraph } from "./VerticalGraph";

import { HOLDING } from "../appConstant";
const Holdings = () => {
  const {
    HEADING,
    INSTRUMENT,
    QTY,
    AVG_COST,
    LTP,
    CUR_VAL,
    PL,
    NET_CHARG,
    DAY_CHARG,
  } = HOLDING;

  const [allHolding, setAllHolding] = useState([]);

  useEffect(() => {
    const fetchHoldings = () => {
      fetch("http://localhost:8080/allHoldings")
        .then((res) => res.json())
        .then((data) => setAllHolding(data))
        .catch((err) => console.error(err));
    };

    fetchHoldings(); // initial fetch

    const interval = setInterval(fetchHoldings, 1000); // fetch every 1 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  // Add this before `return`
  const totalInvestment = allHolding.reduce(
    (acc, stock) => acc + stock.avg * stock.qty,
    0
  );
  const currentValue = allHolding.reduce(
    (acc, stock) => acc + stock.price * stock.qty,
    0
  );
  const pl = currentValue - totalInvestment;
  const plPercent = totalInvestment ? (pl / totalInvestment) * 100 : 0;
  const plClass = pl >= 0 ? "profit" : "loss";

  return (
    <>
      <h3 className="title">
        {HEADING} ({allHolding.length})
      </h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>{INSTRUMENT}</th>
              <th>{QTY}</th>
              <th>{AVG_COST}</th>
              <th>{LTP}</th>
              <th>{CUR_VAL}</th>
              <th>{PL}</th>
              <th>{NET_CHARG}</th>
              <th>{DAY_CHARG}</th>
            </tr>
          </thead>
          <tbody>
            {allHolding.map((stock, index) => {
              const curVal = stock.price * stock.qty;
              const isProfit = curVal - stock.avg * stock.qty >= 0.0;
              const profitClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curVal.toFixed(2)}</td>
                  <td className={profitClass}>
                    {(curVal - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profitClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>{totalInvestment.toFixed(2)}</h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>{currentValue.toFixed(2)}</h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 className={plClass}>
            {pl.toFixed(2)} ({plPercent.toFixed(2)}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>

      {/* <VerticalGraph data={data} /> */}
    </>
  );
};

export default Holdings;
