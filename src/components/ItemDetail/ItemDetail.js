import React, { useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

var stock;

const ItemDetail = ({ infoProduct }) => {



const [cantidad, setCantidad] = useState(0);
 //const [disableButton, setDisableButton] = useState(false);
 //const [disableButton2, setDisableButton2] = useState(true);



const stock=infoProduct.map(product=>product.stock)



const sumar = () => {
 
  if (cantidad <stock) {
    setCantidad(cantidad + 1);
  }
  //  if (cantidad === stock) {
  //    setDisableButton(true);
   
  //  }

  //  if ((cantidad) => 0) {
  //    setDisableButton2(false);
  //  }
}

const restar = () => {
  if (cantidad > 0) {
    setCantidad(cantidad - 1);
  }
    // if (cantidad < 1) {
    //   setDisableButton2(true);
    //   setDisableButton(false);
    // }
};




  

  return (
    <>
      {infoProduct.map((product) => {
        
        return (
  
          <div className="detail-item">
            <div className="row">
              <div className="col-xs-12 col-md-6">
                {<img src={`../img/${infoProduct[0].img}`} />}
              </div>

              <div className="col-xs-12 col-md-6">
                <div className="infoProducto">
                  <h2> {infoProduct[0].title} </h2>
                  <p> Precio: {infoProduct[0].price} $ </p>
                  <p>{infoProduct[0].description} </p>
                  <ItemCount sumar={sumar} restar={restar} cantidad={cantidad} />
                  <Link to={`/carrito`}><Button comprar className="boton" variant="primary">
                    Comprar
                  </Button></Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ItemDetail;
