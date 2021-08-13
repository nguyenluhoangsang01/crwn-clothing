import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { auth } from "../../firebase/firebase.utils";
import { HeaderWrapper, MenuIcon, Options } from "./Header.styles";

const Header = ({ currentUser }) => {
  return (
    <HeaderWrapper>
      <Link to="/" className="logo">
        <Logo />
      </Link>

      <MenuIcon />

      <Options>
        <Link to="/shop">SHOP</Link>
        <Link to="/contact">CONTACT</Link>
        {currentUser ? (
          <span onClick={() => auth.signOut()}>SIGN OUT</span>
        ) : (
          <Link to="/sign-in">SIGN IN</Link>
        )}
      </Options>
    </HeaderWrapper>
  );
};

export default Header;
