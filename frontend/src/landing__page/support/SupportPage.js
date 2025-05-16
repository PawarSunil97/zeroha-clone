import React from "react";
import CreateTicket from "./CreateTicket";
import { TICKETS, SUPPORT_HERO } from "../appConstant";
import Hero from "./Hero";
const SupportPage = () => {
  const {
    HEADING,
    ACCOUNT_OPENING,
    RESIDENT_INDIVIDUAL,
    MINOR,
    NRI,
    COMPANY_PARTNERSHIP,
    GLOSSARY,
    ZERODHA_ACCOUNT,
    YOUR_PROFILE,
    ACCOUNT_MODIFICATION,
    CRM,
    NOMINATION,
    TRANSER_AND_CONVERSION_OF_SECURITY,
    KITE,
    IPO,
    TRADING_FAQ,
    MTF,
    CHARTS_AND_ORDERS,
    ALERTS_AND_NUDGES,
    GENERAL,
    FUNDS,
    ADD_MONEY,
    WITHDRAW_MONEY,
    ADD_BANK_ACCOUNTS,
    EMANDATES,
    CONSOLE,
    PROTFOLIO,
    CORPORATE_ACTIONS,
    FUNDS_STATEMENT,
    REPORTS,
    PROFILE,
    SEGMENTS,
    COIN,
    UNDERSTANDING_MUTUAL_FUNDS_COIN,
    COIN_APP,
    COIN_WEB,
    TRANSACTIONS_AND_REPORTS,
    NPS,
  } = TICKETS;
  const {
    SUPPORT_PORTAL,
    TRACK_TICKETS,
    LEFT_HEADING,
    PLACEHOLDER,
    TRACK_ACCOUNT_OPENING,
    TRACK_SEGMENT_ACTIVATION,
    INTRADY_MARGINS,
    KITE_USER_MANUAL,
    FEATURED,
    CURRENT_TAKEOVERS_AND_DELISTING,
    RIGHT_ENTITLEMENTS_LISTING,
  } = SUPPORT_HERO;
  return (
    <div>
      <Hero
        supportPortal={SUPPORT_PORTAL}
        trackTickets={TRACK_TICKETS}
        leftHeading={LEFT_HEADING}
        placeholder={PLACEHOLDER}
        trackAccountOpening={TRACK_ACCOUNT_OPENING}
        trackSegmentActivation={TRACK_SEGMENT_ACTIVATION}
        intradayMargins={INTRADY_MARGINS}
        kiteUserManual={KITE_USER_MANUAL}
        featured={FEATURED}
        currentTakeoversAndDelisting={CURRENT_TAKEOVERS_AND_DELISTING}
        rightEntitlementsListing={RIGHT_ENTITLEMENTS_LISTING}
      />
      <CreateTicket
        heading={HEADING}
        accountOpening={ACCOUNT_OPENING}
        residentIndividual={RESIDENT_INDIVIDUAL}
        minor={MINOR}
        nri={NRI}
        companyPartnership={COMPANY_PARTNERSHIP}
        glossary={GLOSSARY}
        zerodhaAccount={ZERODHA_ACCOUNT}
        yourProfile={YOUR_PROFILE}
        accountModification={ACCOUNT_MODIFICATION}
        crm={CRM}
        nomination={NOMINATION}
        transAndConversionOfSecurity={TRANSER_AND_CONVERSION_OF_SECURITY}
        kite={KITE}
        ipo={IPO}
        tradingFaq={TRADING_FAQ}
        mtf={MTF}
        chartsAndOrders={CHARTS_AND_ORDERS}
        alertsAndNudges={ALERTS_AND_NUDGES}
        general={GENERAL}
        funds={FUNDS}
        addMoney={ADD_MONEY}
        withdrawMoney={WITHDRAW_MONEY}
        addBankAccounts={ADD_BANK_ACCOUNTS}
        emandates={EMANDATES}
        console={CONSOLE}
        protfolio={PROTFOLIO}
        corporateActions={CORPORATE_ACTIONS}
        fundsStatement={FUNDS_STATEMENT}
        reports={REPORTS}
        profile={PROFILE}
        segments={SEGMENTS}
        coin={COIN}
        understandingMutualFundsCoin={UNDERSTANDING_MUTUAL_FUNDS_COIN}
        coinApp={COIN_APP}
        coinWeb={COIN_WEB}
        transactionsAndReports={TRANSACTIONS_AND_REPORTS}
        nps={NPS}
      />
    </div>
  );
};

export default SupportPage;