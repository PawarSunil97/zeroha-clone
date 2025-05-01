import React from "react";

const Brockerage = ({brokerageHeading, brokerageList,chargeListheading,chargeList }) => {
  return (
    <div className="container">
      <div className="row p-5 mt-5">
        <div className="col-6 p-4">
          <a href="#" style={{ color: "#0d6efd" }}>
            <h3 className="fs-5 text-center">{brokerageHeading}</h3>
          </a>
          <ul className="mt-5 px-5">
            {brokerageList.map((list, index) => (
              <li
                key={index}
                style={{ textAlign: "justify", marginBottom: "10px" }}
              >
                {list}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-6 p-4">
          <a href="#" style={{ color: "#0d6efd" }}>
            <h3 className="fs-5 text-center">{chargeListheading}</h3></a>
            <ul className="mt-5 px-5">
            {chargeList.map((list, index) => (
              <li
                key={index}
                style={{ textAlign: "justify", marginBottom: "10px" }}
              >
                {list}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Brockerage;
