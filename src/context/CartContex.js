import React, { createContext, useState } from "react";
import db from "../../src/firebase";
import { doc, updateDoc } from "firebase/firestore/lite";
const CartContex = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartProducts")) || []
  );
  const [cantItems, setCantItems] = useState([]);
  const [tof, setTof] = useState();

  //INICIO FUNCIONES

  const deleteItem = (item) => {
    for (var i = 0; i < cartItems.length; i++) {
      if (cartItems[i].item.id === item.id) {
        cartItems.splice(i, 1);
      }
    }
    setCartItems([...cartItems]);
  };

  const totalPrice = () => {
    return cartItems.reduce(
      (acumulado, item) => acumulado + item.counter * item.precio,
      0
    );
  };
  const totalItems = () => {
    return cartItems.reduce((acumulado, item) => acumulado + item.counter, 0);
  };

  const addProduct = (item, counter, precio) => {
    let cartElement = { item, counter, precio };

    let cartAux = [];

    if (isInCart(item)) {
    

      cartElement = cartItems.find((el) => el.item.id === item.id);

      cartElement.counter = cartElement.counter + counter;

      cartElement.precio = cartElement.counter * precio;

      cartAux = [...cartItems];

      addProductStorage();
    } else {
    
      cartAux = [cartElement, ...cartItems];
    }

    setCartItems(cartAux);
  };

  const addProductStorage = () => {
    localStorage.setItem("cartProducts", JSON.stringify(cartItems));
  };

  const isInCart = (item) => {
  
    return cartItems && cartItems.some((el) => el.item.id === item.id);
  };

  const data = {
    cartItems,
    addProduct,
    deleteItem,
    totalItems,
    setTof,
    tof,
    totalPrice,
  };

  return <CartContex.Provider value={data}>{children}</CartContex.Provider>;
};

export { CartProvider as CartProvider };
export default CartContex;
