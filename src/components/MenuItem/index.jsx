import React from "react";
import { MenuItemWrapper } from "./MenuItem.styles";

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <MenuItemWrapper imageUrl={imageUrl} className={size}>
      <div className="bgc" />
      <div>
        <h1>{title.toUpperCase()}</h1>
        <span>SHOP NOW</span>
      </div>
    </MenuItemWrapper>
  );
};

export default MenuItem;
