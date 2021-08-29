import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Context } from "../../context/cart";
import { signOutStart } from "../../redux/users/users.actions";
import { selectCurrentUser } from "../../redux/users/users.selectors";
import CartDropDown from "../CartDropDown";
import CartIcon from "../CartIcon";
import { HeaderWrapper, MenuIcon, Options } from "./Header.styles";

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const history = useHistory();

  const dispatch = useDispatch();

  const [hidden] = useContext(Context);

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
          <span onClick={() => dispatch(signOutStart())}>SIGN OUT</span>
        ) : (
          <Link to="/sign-in">SIGN IN</Link>
        )}

        <CartIcon />
      </Options>

      {hidden && <CartDropDown />}
    </HeaderWrapper>
  );
};

export default Header;
