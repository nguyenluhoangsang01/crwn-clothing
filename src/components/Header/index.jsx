import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { auth } from "../../firebase/firebase.utils";
import { HeaderWrapper } from "./Header.styles";

const Header = ({ currentUser }) => {
  console.log(currentUser);

  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo />
      </Link>

      <div>
        <Link to="/shop">SHOP</Link>
        <Link to="/contact">CONTACT</Link>
        {currentUser ? (
          <div onClick={() => auth.signOut()}>SIGN OUT</div>
        ) : (
          <Link to="/sign-in">SIGN IN</Link>
        )}
      </div>
    </HeaderWrapper>
  );
};

export default Header;
