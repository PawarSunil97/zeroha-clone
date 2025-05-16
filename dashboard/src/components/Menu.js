import React, { useState } from "react";

import { Link } from "react-router-dom";

const Menu = ({
  dashboard,
  orders,
  holdeings,
  positions,
  funds,
  apps,
  zu,
  userId,
}) => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isOpenProfileMenu, setIsOpenProfileMenu] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsOpenProfileMenu(!isOpenProfileMenu);
  };
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(0)}
            >
              <p className={`${selectedMenu === 0 ? "menu selected" : "menu"}`}>
                {dashboard}
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(1)}
            >
              <p className={`${selectedMenu === 1 ? "menu selected" : "menu"}`}>
                {orders}
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/holdings"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(2)}
            >
              <p className={`${selectedMenu === 2 ? "menu selected" : "menu"}`}>
                {holdeings}
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/positions"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(3)}
            >
              <p className={`${selectedMenu === 3 ? "menu selected" : "menu"}`}>
                {positions}
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/funds"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(4)}
            >
              <p className={`${selectedMenu === 4 ? "menu selected" : "menu"}`}>
                {funds}
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/apps"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(5)}
            >
              <p className={`${selectedMenu === 5 ? "menu selected" : "menu"}`}>
                {apps}
              </p>
            </Link>
          </li>
        </ul>
        <hr />

        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">{zu}</div>
          <p className="username">{userId}</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
