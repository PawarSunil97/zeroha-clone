import React from "react";
import Hero from "./Hero";
import Brockerage from "./Brockerage";
import OpenAccount from "../OpenAccount";
import {
  PRICING_PAGE,
  BROKERAGE_CALCULATOR,
  CHARGES_LIST,
  BROKERAGE_PAGE,
} from "../appConstant";
const {
  PRICING_HEADING,
  PARA,
  IMG_URL_PRICING_0,
  HEADING_PRICING_0,
  PARA_PRICING_0,
  IMG_URL_INTRADAY,
  HEADING_INTRADAY,
  PARA_INTRADAY,
  IMAGE_DIRECT_MF,
  HEADING_DIRECT_MF,
  PARA_DIRECT_MF,
} = PRICING_PAGE;
const { BROKERAGE_HEADING, CHARGES_LIST_HEADING } = BROKERAGE_PAGE;
const PricingPage = () => {
  return (
    <div>
      <Hero
        pricingheading={PRICING_HEADING}
        para={PARA}
        imgPricing0={IMG_URL_PRICING_0}
        headingPricing0={HEADING_PRICING_0}
        paraPricing0={PARA_PRICING_0}
        imgIntraday={IMG_URL_INTRADAY}
        headingIntraday={HEADING_INTRADAY}
        paraIntraday={PARA_INTRADAY}
        imgDirectMf={IMAGE_DIRECT_MF}
        headingDirectMf={HEADING_DIRECT_MF}
        paraDirectMf={PARA_DIRECT_MF}
      />
      <OpenAccount />
      <Brockerage
        brokerageHeading={BROKERAGE_HEADING}
        brokerageList={BROKERAGE_CALCULATOR}
        chargeListheading={CHARGES_LIST_HEADING}
        chargeList={CHARGES_LIST}
      />
    </div>
  );
};

export default PricingPage;
