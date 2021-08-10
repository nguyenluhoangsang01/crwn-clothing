import React from "react";
import { withRouter } from "react-router-dom";
import { MenuItemWrapper } from "./MenuItem.styles";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <MenuItemWrapper
      imageUrl={imageUrl}
      className={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div className="bgc" />
      <div>
        <h1>{title.toUpperCase()}</h1>
        <span>SHOP NOW</span>
      </div>
    </MenuItemWrapper>
  );
};

export default withRouter(MenuItem);
