import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router";
import { mockProducts } from "../../data/data";
const ItemDetailContainer = () => {
  const [infoProduct, setInfoProduct] = useState([]);

  const {productId}=useParams();

  const getProduct = new Promise((resolve) => {
    setTimeout(() => {
    
      resolve(mockProducts);
    }, 2000);
  });

  useEffect(() => {

    getProduct.then((res)=>{

      productId ? setInfoProduct(res.filter( (product) => product.id === productId  ))
                : setInfoProduct( res ) 

    });
  },[productId]);


    
  });
  

  return (
    <div className="container3">
      <span><h3>Detalle del Producto</h3></span>


      
      <ItemDetail infoProduct={infoProduct} />
    </div>
  );
};

export default ItemDetailContainer;
