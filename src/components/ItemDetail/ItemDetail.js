import React, { useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import {Button} from "react-bootstrap"

const ItemDetail = ({infoProduct}) => {
console.log(infoProduct);

  /*

 id:'3',
        title:'Remera Puma',
        description:'Remera Algodon',
        price:1200,
        img:'remeraPuma1.jpg',
        stock:20,
        category:'indumentaria'

*/

  return (<>
    {infoProduct.map(product=>{
      return (  

        <div className="detail-item">

        <div className="row">
        <div className="col-xs-12 col-md-6">
        { <img src={`../img/${infoProduct[0].img}`}/> }
        </div>



<div className="col-xs-12 col-md-6">
<div className="infoProducto">
<h2> {infoProduct[0].title} </h2> 
<p> Precio: {infoProduct[0].price} $ </p>
<p>{infoProduct[0].description} </p>
<ItemCount/>
<Button className="boton" variant="primary">Comprar</Button>
</div>

</div>
</div>
</div>



      )
    
    
    })
     }
    
    
 
      
      
      


      
    
    </>)
}

export default ItemDetail;
