import React from "react";

const CreateTicket = ({
  heading,
  accountOpening,
  residentIndividual,
  minor,
  nri,
  companyPartnership,
  glossary,
  zerodhaAccount,
  yourProfile,
  accountModification,
  crm,
  nomination,
  transAndConversionOfSecurity,
  kite,
  ipo,
  tradingFaq,
  mtf,
  chartsAndOrders,
  alertsAndNudges,
  general,
  funds,
  addMoney,
  withdrawMoney,
  addBankAccounts,
  emandates,
  console: consoleValue,
  protfolio,
  corporateActions,
  fundsStatement,
  reports,
  profile,
  segments,
  coin,
  understandingMutualFundsCoin,
  coinApp,
  coinWeb,
  transactionsAndReports,
  nps,
}) => {
  return (
    <div className="container">
      <h1 className="fs-4 text-muted mb-4" style={{ paddingTop: "80px" }}>
        {heading}
      </h1>
      <div className="row mt-5">
        {/* Account Opening */}
        <div className="col-md-4 mb-4">
          <a href="#">
            <h2 className="fs-5 mb-3">
              <i className="fa fa-plus-circle" aria-hidden="true"></i> {accountOpening}
            </h2>
          </a>
          <ul className="list-unstyled ps-3">
            {[residentIndividual, minor, nri, companyPartnership, glossary].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="text-primary text-decoration-none">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Your Zerodha Account */}
        <div className="col-md-4 mb-4">
          <a href="#">
            <h2 className="fs-5 mb-3">
              <i className="fa fa-user" aria-hidden="true"></i> {zerodhaAccount}
            </h2>
          </a>
          <ul className="list-unstyled ps-3">
            {[yourProfile, accountModification, crm, nomination, transAndConversionOfSecurity].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="text-primary text-decoration-none">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Kite */}
        <div className="col-md-4 mb-4">
          <a href="#">
            <h2 className="fs-5 mb-3">
              <i className="fa fa-bar-chart" aria-hidden="true"></i> {kite}
            </h2>
          </a>
          <ul className="list-unstyled ps-3">
            {[ipo, tradingFaq, mtf, chartsAndOrders, alertsAndNudges, general].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="text-primary text-decoration-none">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="row mt-4">
        {/* Funds */}
        <div className="col-md-4">
          <a href="#">
            <h2 className="fs-5 mb-3">
              <i className="fa fa-credit-card me-2"></i> {funds}
            </h2>
          </a>
          <ul className="list-unstyled">
            {[addMoney, withdrawMoney, addBankAccounts, emandates].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="text-primary text-decoration-none">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Console */}
        <div className="col-md-4">
          <a href="#">
            <h2 className="fs-5 mb-3">
              <i className="fa fa-dashboard me-2"></i> {consoleValue}
            </h2>
          </a>
          <ul className="list-unstyled">
            {[protfolio, corporateActions, fundsStatement, reports, profile, segments].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="text-primary text-decoration-none">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Coin */}
        <div className="col-md-4">
          <a href="#">
            <h2 className="fs-5 mb-3">
              <i className="fa fa-btc me-2"></i> {coin}
            </h2>
          </a>
          <ul className="list-unstyled">
            {[understandingMutualFundsCoin, coinApp, coinWeb, transactionsAndReports, nps].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="text-primary text-decoration-none">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;