import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CartProvider from "./context/cart";
import CheckoutPage from "./pages/CheckoutPage";
import Homepage from "./pages/Homepage";
import ShopPage from "./pages/ShopPage";
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage";
import { selectCartItemQuantity } from "./redux/cart/cart.selectors";
import { checkUserSession } from "./redux/users/users.actions";
import { selectCurrentUser } from "./redux/users/users.selectors";

function App() {
  const currentUser = useSelector(selectCurrentUser);
  const cartItemQuantity = useSelector(selectCartItemQuantity);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <CartProvider>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>

        <Route path="/shop">
          <ShopPage />
        </Route>

        <Route path="/checkout">
          <CheckoutPage />
        </Route>

        <Route path="/sign-in">
          {currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />}
          {currentUser && cartItemQuantity && <Redirect to="/checkout" />}
        </Route>
      </Switch>
      <Footer />
    </CartProvider>
  );
}

export default App;
