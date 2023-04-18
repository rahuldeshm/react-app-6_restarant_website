import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { DataContextProvider } from "./store/data-context";

function App() {
  const [cart, setCart] = useState(false);
  function closeHandler() {
    setCart(false);
  }
  function openHandler() {
    setCart(true);
  }
  return (
    <DataContextProvider>
      {cart && <Cart closeHandler={closeHandler}></Cart>}
      <Header openHandler={openHandler}></Header>
      <main>
        <Meals />
      </main>
    </DataContextProvider>
  );
}

export default App;
