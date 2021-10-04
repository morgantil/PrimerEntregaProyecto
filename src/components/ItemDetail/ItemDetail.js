import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import {Button} from "react-bootstrap"

const ItemDetail = (props) => {
  return (
    <div className="detail-item">
      
      {console.log("DATA DESDE DETALLE DE PRODUCTO", props.data)}{" "}
      


      <div className="row">
                <div className="col-xs-12 col-md-6">
                <img src={`../img/${props.data.img}`}/>
                </div>


      
      <div className="col-xs-12 col-md-6">
        <div className="infoProducto">
        <h2> {props.data.title} </h2> 
        <p> Precio: {props.data.price} $ </p>
        <p>{props.data.description} </p>
        <ItemCount/>
        <Button className="boton" variant="primary">Comprar</Button>
      </div>
      
      </div>
    </div>
    </div>
  );
};

export default ItemDetail;
