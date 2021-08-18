import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { auth } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/users/users.selectors";
import CartDropDown from "../CartDropDown";
import CartIcon from "../CartIcon";
import { HeaderWrapper, MenuIcon, Options } from "./Header.styles";

const Header = () => {
  const [isToggleCartDropDown, setIsToggleCartDropDown] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const history = useHistory();

  const handleClickCartIcon = () =>
    setIsToggleCartDropDown(!isToggleCartDropDown);

  useEffect(() => {
    if (history.location.pathname === "/checkout") {
      history.push(currentUser ? "/checkout" : "/sign-in");
    }
  }, [currentUser, history]);

  return (
    <HeaderWrapper>
      <Link to="/" className="logo">
        <Logo />
      </Link>

      <MenuIcon />

      <Options>
        <Link to="/shop">SHOP</Link>
        {currentUser ? (
          <span onClick={() => auth.signOut()}>SIGN OUT</span>
        ) : (
          <Link to="/sign-in">SIGN IN</Link>
        )}

        <CartIcon onClickCartIcon={handleClickCartIcon} />
      </Options>

      {isToggleCartDropDown && (
        <CartDropDown onClickCustom={handleClickCartIcon} />
      )}
    </HeaderWrapper>
  );
};

export default Header;
