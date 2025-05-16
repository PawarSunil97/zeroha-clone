import React, { useContext } from "react";
import { Tooltip, Grow, } from "@mui/material";
import { WATCHLISTACTION } from "../../appConstant";
import { BarChartOutlined, MoreHoriz } from "@mui/icons-material";
import GeneralContext from "../GeneralContext";

const WatchListActions = ({ uid }) => {
  const { BUTTON } = WATCHLISTACTION;
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  const handleSellClick=()=>{
    generalContext.openSellWindow(uid)
  }
  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="buy" onClick={handleBuyClick}>
            {BUTTON.BUY}
          </button>
        </Tooltip>

        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleSellClick}
        >
          <button className="sell">{BUTTON.SELL}</button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};

export default WatchListActions;
