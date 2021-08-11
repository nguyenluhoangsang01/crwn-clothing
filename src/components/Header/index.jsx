import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { HeaderWrapper } from "./Header.styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo />
      </Link>

      <div>
        <Link to="/shop">SHOP</Link>
        <Link to="/contact">CONTACT</Link>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
