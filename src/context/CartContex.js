import React, { createContext,useState }from 'react'

const CartContex = createContext();




const CartProvider=({children})=>{


    const [cartItems, setCartItems] = useState([]);
    console.log("CARRITO: ",cartItems);

    //INICIO FUNCIONES

   
const addProduct = ( item, counter ) => {
      
      // Guardo el producto en una constante para poder tratarlo
      let cartElement = { item, counter }
      // Creo una var-carrito auxiliar
      let cartAux = [];
      // Consulto si el producto esta en el carrito
      if( isInCart( item ) ){
          console.log(`Esta en el 🛒`)
      // Busco el producto por ID
          cartElement = cartItems.find( el => el.item.id === item.id )
      // Actualizo el contador del item filtrado
          cartElement.counter = cartElement.counter + counter
      // Retorno el carrito tal cual como estaba
          cartAux = [...cartItems]
      }else {
          console.log(`NO esta en el 🛒`)
          cartAux = [ cartElement, ...cartItems ]
      }

      setCartItems(cartAux)

  }

  const isInCart = ( item ) => {
      // Busco si existe el item en mi cart
      console.log('Log del producto isInCart: ', item );
      return cartItems && cartItems.some( el => el.item.id === item.id)
  }

  
  const data = {
      cartItems,
      addProduct
  }



    //FIN FUNCIONES

   

 

   

    return(

        <CartContex.Provider value={data}>
            {children}
        </CartContex.Provider>
    )
}








export {CartProvider as CartProvider}
export default CartContex

