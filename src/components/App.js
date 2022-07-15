import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  
  let [mode, setMode] = useState(false);
  
  function handleClick() {
    setMode((mode) => !mode)
  }
  
  let appClass = mode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{appClass}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
