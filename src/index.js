import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import GlobalStyle from "./globalStyles";
import CartProvider from "./providers/carts/provider";
import { persistor, store } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />

    <CartProvider>
      <Provider store={store}>
        <BrowserRouter>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </BrowserRouter>
      </Provider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
