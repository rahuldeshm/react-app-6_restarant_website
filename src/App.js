import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cart, setCart] = useState(false);
  function closeHandler() {
    setCart(false);
  }
  function openHandler() {
    setCart(true);
  }
  return (
    <>
      {cart && <Cart closeHandler={closeHandler}></Cart>}
      <Header openHandler={openHandler}></Header>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
