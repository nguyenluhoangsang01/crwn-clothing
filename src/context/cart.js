import { createContext, useState } from "react";

export const Context = createContext();

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);

  return (
    <Context.Provider value={[hidden, setHidden]}>{children}</Context.Provider>
  );
};

export default CartProvider;
