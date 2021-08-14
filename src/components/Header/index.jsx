import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { auth } from "../../firebase/firebase.utils";
import CartDropDown from "../CartDropDown";
import CartIcon from "../CartIcon";
import { HeaderWrapper, MenuIcon, Options } from "./Header.styles";

const Header = ({ currentUser }) => {
  const [isToggleCartDropDown, setIsToggleCartDropDown] = useState(false);

  const handleClickCartIcon = () =>
    setIsToggleCartDropDown(!isToggleCartDropDown);

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

        <CartIcon onClickCartIcon={handleClickCartIcon} />
      </Options>

      {isToggleCartDropDown && <CartDropDown />}
    </HeaderWrapper>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser,
});

export default connect(mapStateToProps)(Header);
