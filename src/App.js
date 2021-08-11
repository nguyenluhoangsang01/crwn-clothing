import "./App.css";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>

        <Route path="/shop">
          <ShopPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
