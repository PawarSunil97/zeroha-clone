import React from "react";

import Menu from "./Menu";
import { MENU,TOP_BAR } from "../appConstant";

const TopBar = () => {
  const {DASHBOARD,ORDERS,HOLDINGS,POSITIONS,FUNDS,APPS,ZU,USERID}=MENU;
  const {NIFTY_50,SENSEX,POINT}=TOP_BAR
  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">{NIFTY_50}</p>
          <p className="index-points">{POINT} </p>
          <p className="percent"> </p>
        </div>
        <div className="sensex">
          <p className="index">{SENSEX}</p>
          <p className="index-points">{POINT}</p>
          <p className="percent"></p>
        </div>
      </div>

      <Menu
      dashboard={DASHBOARD}
      orders={ORDERS}
      holdeings={HOLDINGS}
      positions={POSITIONS}
      funds={FUNDS}
      apps={APPS}
      zu={ZU}
      userId={USERID}
      />
    </div>
  );
};

export default TopBar;
