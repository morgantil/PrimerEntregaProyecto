import React, { createContext, useContext } from "react";
import CartContex from "../context/CartContex";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import db from "../../src/firebase";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  query,
  where,
  addDoc,
} from "firebase/firestore/lite";
const Carrito = () => {
  const { cartItems, deleteItem, totalPrice } = useContext(CartContex);
  

  //INICIO FUNCIONES

  const newOrder = {
    buyer: {
      name: "Leonardo",
      email: "lala@lla.com",
      phone: 115555,
    },

    items: cartItems,

    total: totalPrice(),
  };

  const addOrder = () => {
  

    pushOrderFirebase(newOrder);
  };

  const pushOrderFirebase = async (newOrder) => {
    const orderFirebase = collection(db, "ordenes");
    const order = await addDoc(orderFirebase, newOrder);

  };

  //FIN FUNCIONES

  return (
    
    <div className="container cart">
      <div className="products single">
       

        <div className="container-inner">
          <h2>Tu compra</h2>
          {cartItems.length > 0 ? (
            <div>
              <div className="d-none d-md-flex row titulo">
                <div className="col-12 col-md-4">
                  <p>Producto(s)</p>
                </div>
                <div className="col-12 col-md-3">
                  <p>Precio por unidad</p>
                </div>
                <div className="col-12 col-md-3">
                  <p>Subtotal</p>
                </div>
                <div className="col-12 col-md-2">
                  <p>Eliminar item</p>
                </div>
              </div>
              {cartItems.map(({ item, precio, counter }) => (
                <div key={item.id} className="row">
                  <div className="col-12 col-md-4">
                    <p>
                      {item.title} x {counter}
                    </p>
                  </div>
                  <div className="col-12 col-md-3">
                    <p>$ {precio}</p>
                  </div>
                  <div className="col-12 col-md-3">
                    <p>$ {precio * counter}</p>
                  </div>
                  <div className="col-12 col-md-2">
               
                    <img onClick={() => deleteItem(item)} className={""} src={`/img/basura.png`} alt="" /> 
                      
                    
                  </div>
                </div>
              ))}

              <div>
                <div className="col-12 col-md-3">
                  <p className="mt-2">
                    <b>Total: $ {totalPrice() ? totalPrice() : 0}</b>
                  </p>
                </div>
              </div>
              <div>
                <Button className={"btn btn-dark"} onClick={() => addOrder()}>Terminar Compra</Button>
              </div>
            </div>
          ) : (
            "No hay productos en el carrito :("
          )}
        </div>
        <div className="statusbar">
          <Link to={`/`}>
            <div className="left">Volver a productos</div>
          </Link>
          <div className="right">&nbsp;</div>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
