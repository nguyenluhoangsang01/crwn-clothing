import "./App.css";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HatsPage from "./pages/HatsPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>

        <Route path="/shop/hats">
          <HatsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
