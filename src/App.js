import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import CheckoutPage from "./pages/CheckoutPage";
import Homepage from "./pages/Homepage";
import ShopPage from "./pages/ShopPage";
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage";
import { selectCartItemQuantity } from "./redux/cart/cart.selectors";
import { setCurrentUser } from "./redux/users/users.actions";
import { selectCurrentUser } from "./redux/users/users.selectors";

function App() {
  const currentUser = useSelector(selectCurrentUser);
  const cartItemQuantity = useSelector(selectCartItemQuantity);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          dispatch(
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
            })
          );
        });
      } else {
        dispatch(setCurrentUser(userAuth));
      }
    });

    return () => unsubscribeFromAuth();
  }, [dispatch]);

  return (
    <>
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
    </>
  );
}

export default App;
