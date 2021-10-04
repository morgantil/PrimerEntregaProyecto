import React,{useState} from 'react'
import {Card,Button} from "react-bootstrap"
import "./ItemCount.css";

const ItemCount = () => {
const [stock, setStock] = useState(10);
  const [cantidad, setCantidad] = useState(0);
  const [disableButton, setDisableButton] = useState(false);
  const [disableButton2, setDisableButton2] = useState(true);

  const sumar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
    if (cantidad === stock) {
      setDisableButton(true);
    }

    if ((cantidad) => 0) {
      setDisableButton2(false);
    }
  };

  const restar = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
    if (cantidad < 1) {
      setDisableButton2(true);
      setDisableButton(false);
    }
  };

  return (
    <>
      {" "}
      <div>
        
        <Button className="boton" disabled={disableButton} onClick={() => sumar()} variant="contained"> + </Button>
        <h3 className="numero"> {cantidad} </h3>
        <Button  className="boton" disabled={disableButton2} onClick={() => restar()} variant="contained"> -</Button>
      </div>
    </>
  );
}

export default ItemCount
