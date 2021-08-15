import { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import CheckoutPage from "./pages/CheckoutPage";
import Homepage from "./pages/Homepage";
import ShopPage from "./pages/ShopPage";
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage";
import { setCurrentUser } from "./redux/users/users.actions";
import { selectCurrentUser } from "./redux/users/users.selectors";

function App({ setCurrentUser }) {
  const currentUser = useSelector((state) => selectCurrentUser(state));

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });

    return () => unsubscribeFromAuth();
  }, [setCurrentUser]);

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
        </Route>
      </Switch>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
