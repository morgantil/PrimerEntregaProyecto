import React, {useContext } from "react";
import "./CartWidget.css";
import { Cart } from 'react-bootstrap-icons';
import CartContex  from '../../context/CartContex';


const CartWidget = () => {
    const {totalItems} = useContext(CartContex);
    
    
 
    
     
    

    return (<>
        <div >
       
          
       <Cart/> <p id="cant">{totalItems()}</p>
       
        </div></>
    )
}

export default CartWidget


