import React, { useState, useContext } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
//CONTEXT
import CartContex from "../../context/CartContex";

const ItemDetail = ({ infoProduct }) => {
  const { addProduct, setCartItems, setTof } = useContext(CartContex);

  const [cantidad, setCantidad] = useState(0);

  const [showCart, setShowCart] = useState(true);

  const ocultar = () => {
    cantidad > 0 ? setShowCart(false) : setShowCart(true);
    cantidad > 0 ? setTof(false) : setTof(true);
  };

  const stock = infoProduct.map((product) => product.stock);

  //INICIO FUNCIONES
  const sumar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const restar = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }

  };

  const addToCart = () => {
    addProduct(infoProduct[0], cantidad, infoProduct[0].price);
  };

  const handleClick = () => {
    addToCart();
    ocultar();
  };

  //FIN FUNCIONES

  return (

    <>
    
      {infoProduct.map((product) => {
        const nombre = infoProduct.map((product) => product.title);
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
                </div>
                <div className={"row"}>
                  <div className={"col-12"}>
                <Button 
                  onClick={handleClick}
                  className={` btn btn-success m-5cart-widget btnPosition ${
                    showCart ? "" : "active"
                  }`}
                  variant="primary"
                >
                  Comprar
                </Button>
                <Link to={`/carrito`}>
                  {" "}
                  <Button className={` btnPosition btn btn-danger cart-widget ${showCart ? "active" : ""}`}>
                    Terminar Compra
                  </Button>{" "}
                </Link>
                </div>
              </div>
            </div>
          
        );
      })}
      
    </>
   
  );
};

export default ItemDetail;
