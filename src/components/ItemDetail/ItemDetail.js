import React, { useState,useContext } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
//CONTEXT
import CartContex  from '../../context/CartContex';



var stock;

const ItemDetail = ({ infoProduct }) => {




const {addProduct}=useContext(CartContex);


const [cantidad, setCantidad] = useState(0);
//const [stock, setstock] = useState(infoProduct.map(product=>product.stock)); OTRA MANERA EN LUGAR DE LA LINEA 18
 //const [disableButton, setDisableButton] = useState(false);
 //const [disableButton2, setDisableButton2] = useState(true);

const stock=infoProduct.map(product=>product.stock);




//INICIO FUNCIONES 
const sumar = () => {
 
  if (cantidad <stock) {
    setCantidad(cantidad + 1);
  }
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

const addToCart = (  ) => {
  console.log("LO QUE ENVIO", infoProduct[0])

  addProduct( infoProduct[0], cantidad )
}




//FIN FUNCIONES




  return (
    <>
      {infoProduct.map((product) => {
        const nombre=infoProduct.map(product=>product.title)
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
                  <ItemCount 
                  sumar={sumar} 
                  restar={restar} 
                  cantidad={cantidad}
                  />
                
                </div>
              </div>
              <div>
              <Button onClick={addToCart} className="btn btn-primary ml-5" variant="primary">Comprar
              </Button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ItemDetail;
