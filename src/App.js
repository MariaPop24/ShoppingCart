import React, { useState } from "react";
import Header from "./components/Header/Header";
import ProductsList from "./components/ProductsList/ProductsList";
import data from "./data";
import "./App.css";
import Cart from "./components/Cart/Cart";

const App = () => {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const find = cartItems.find((item) => item.id === product.id)

    if (find) {
      setCartItems(cartItems.map((item) => item.id === product.id ? { ...find, quantity: find.quantity + 1 } : item))
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (product) => {
    const find = cartItems.find((item) => item.id === product.id);

    if (find.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...find, quantity: find.quantity - 1 } : item
        )
      );
    }
  }
  return (
    <div>
      <Header numberCartItems={cartItems.length} />
      <div className="page-container">
        <ProductsList products={products} addToCart={addToCart} />
        <Cart
          cartItems={cartItems}
          addToCart={addToCart}
          removeFromCart={removeFromCart} />
      </div>

    </div>

  );
}

export default App;
