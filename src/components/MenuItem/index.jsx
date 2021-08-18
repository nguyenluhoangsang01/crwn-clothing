import React from "react";
import { withRouter } from "react-router-dom";
import { Bgc, MenuItemWrapper, Subtitle, Title } from "./MenuItem.styles";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <MenuItemWrapper
      className={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <Bgc imageUrl={imageUrl} />

      <div>
        <Title>{title.toUpperCase()}</Title>
        <Subtitle>SHOP NOW</Subtitle>
      </div>
    </MenuItemWrapper>
  );
};

export default withRouter(MenuItem);
