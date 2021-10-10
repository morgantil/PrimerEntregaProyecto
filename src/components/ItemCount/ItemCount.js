import React from 'react'
import {Card,Button} from "react-bootstrap"
import "./ItemCount.css";

const ItemCount = (props) => {

  

  return (
    <>
      
      <div>
        
        <Button onClick={props.sumar} className="boton"> + </Button>
        <h3 className="numero">{props.cantidad}</h3>
        <Button  className="boton"  onClick={props.restar} > -</Button>
      </div>
    </>
  );
}

export default ItemCount
