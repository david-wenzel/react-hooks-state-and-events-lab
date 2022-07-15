import React, { useState } from "react";

function Item({ name, category }) {

  let [inCart, setInCart] = useState(false)

  function handleClick() {
    setInCart((inCart) => !inCart)
  }

  let cartPars = inCart ? "Remove From Cart" : "Add to Cart"

  let classCart = inCart ? "in-cart" : ""

  return (
    <li className={classCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{cartPars}</button>
    </li>
  );
}

export default Item;
