import { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import Homepage from "./pages/Homepage";
import ShopPage from "./pages/ShopPage";
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage";
import { setCurrentUser } from "./redux/users/users.actions";

function App({ currentUser, setCurrentUser }) {
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

        <Route path="/sign-in">
          {currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />}
        </Route>
      </Switch>
    </>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
