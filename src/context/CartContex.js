import React, { createContext, useState } from "react";
import db from '../../src/firebase'
import {doc,updateDoc} from "firebase/firestore/lite";
const CartContex = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartProducts'))||[]);
  const [cantItems, setCantItems] = useState([]);
  const [tof,setTof]=useState();


  console.log("CARRITO: ", cartItems);

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
    return cartItems.reduce((acumulado, item) => acumulado + (item.counter * item.precio), 0);
}
const totalItems = () => {
  return cartItems.reduce((acumulado, item) => acumulado + (item.counter), 0);
}

  const addProduct = (item, counter, precio) => {
    // Guardo el producto en una constante para poder tratarlo
    let cartElement = { item, counter, precio };
 
    // Creo una var-carrito auxiliar
    let cartAux = [];
    // Consulto si el producto esta en el carrito
    if (isInCart(item)) {
      
      console.log(`Esta en el 🛒`);
      // Busco el producto por ID
      cartElement = cartItems.find((el) => el.item.id === item.id);
      // Actualizo el contador del item filtrado
      cartElement.counter = cartElement.counter + counter;
      //AGREGO EL PRECIO

      cartElement.precio = cartElement.counter * precio;

      // Retorno el carrito tal cual como estaba
      cartAux = [...cartItems];
      //addProductFirebaseCart();
      addProductStorage();
    } else {
      console.log(`NO esta en el 🛒`);
      cartAux = [cartElement, ...cartItems];
    }

    setCartItems(cartAux);

    /*NUEVO--------
    const addProductFirebaseCart=async()=>{

      const cartData=doc(db,'cart','aYE94Wf5Ac8u18d6m7gD')
      await updateDoc(cartData,{
        items:cartItems

      })
    }

    NUEVO-------*/


  };


  const addProductStorage=()=>{
    
    localStorage.setItem("cartProducts",JSON.stringify(cartItems))


  }



  const isInCart = (item) => {
    // Busco si existe el item en mi cart
    console.log("Log del producto isInCart: ", item);
    return cartItems && cartItems.some((el) => el.item.id === item.id);
  };

  const data = {
    cartItems,
    addProduct,
    deleteItem,
    totalItems,
    setTof,
    tof,
    totalPrice
    
  };

  //FIN FUNCIONES

  return <CartContex.Provider value={data}>{children}</CartContex.Provider>;
};

export { CartProvider as CartProvider };
export default CartContex;
