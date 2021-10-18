
import React, {useContext } from "react";
import "./CartWidget.css";
import { Cart } from 'react-bootstrap-icons';
import CartContex  from '../../context/CartContex';
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {totalItems} = useContext(CartContex);
    
    
 
    
     
    

    return (
         <>
         {totalItems() > 0 && (
            <div>
               <div>
                  {" "}
                  <Link to={`/carrito`}>
                     <button className={`cart-widget`}>
                        <Cart /> <p id="cant">{totalItems()}</p>
                     </button>
                  </Link>
               </div>
            </div>
         )}
      </>
    )
}

export default CartWidget

