import React, { createContext,useState }from 'react'

const CartContex = createContext();




const CartProvider=({children})=>{

    const [cartItems, setCartItems] = useState([]);

   

      // INICIO FUNCIONES

      // const addItem = (item, count) => {
      //   // 1. Guardo mi producto en un objeto.
      //   let cartElement = {item, count}
      //   console.log(`cartElement`, cartElement)
      //   // 2. Creo un carrito auxiliar.
      //   let cartAux = []
      //   // 3. Consulto si el producto esta en el carrito.
      //   if (isInCart(item)) {
      //     console.log(`Esta en el 🛒`)
      //     // 3.a. Busco el producto por el id.
      //     cartElement = cartItems.find(element => element.item.id === item.id)
      //     // 3.b. Actualizo el contador del item filtrado.
      //     cartElement.count = cartElement.count + count
      //     // 3.c. retorno el carrito tal como estaba.
      //     cartAux = [...cartItems]
      //   } else {
      //     console.log(`NO esta en el 🛒`)
      //     // 3.a. Agrego el item al carrito
      //     cartAux = [cartElement, ...cartItems]
      //   }
      //   setCartItems(cartAux)
      // }
    
       const addItem = (nombre,cantidad) => {
        console.log("FUNCIONA DESDE CONTEXT, la cantidad es"+nombre+cantidad);
     }


     
    
      // * Reviso si el item esta en el carrito.
      const isInCart = (item) => {
        // BUSCO si encuentro al menos 1 elemento que cumpla con la condicion.
        return cartItems && cartItems.some(element => element.item.id === item.id)
      }

 // FIN FUNCIONES

    const data={

  cartItems,
   addItem,
   isInCart
 


    }

    return(

        <CartContex.Provider value={data}>
            {children}
        </CartContex.Provider>
    )
}








export {CartProvider as CartProvider}
export default CartContex

