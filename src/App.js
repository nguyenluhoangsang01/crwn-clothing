import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { auth } from "./firebase/firebase.utils";
import Homepage from "./pages/Homepage";
import ShopPage from "./pages/ShopPage";
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => unsubscribeFromAuth();
  }, []);

  return (
    <>
      <Header currentUser={currentUser} />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>

        <Route path="/shop">
          <ShopPage />
        </Route>

        <Route path="/sign-in">
          <SignInAndSignUpPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
