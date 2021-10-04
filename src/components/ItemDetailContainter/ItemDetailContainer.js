import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [infoProduct, setInfoProduct] = useState({});

  const getProduct = new Promise((resolve) => {
    setTimeout(() => {
      const mockProducts = {
        id: "1",
        title: "Remera Nike",
        description: "Remera Algodon",
        price: 1000,
        img: "remeraNike1.jpg",
        stock: 20,
      };

      resolve(mockProducts);
    }, 2000);
  });

  useEffect(() => {
    getProduct.then((res) => {
      console.log("Respuesta de promesa 2", res);
      setInfoProduct(res);
    });
  });

  return (
    <div className="container3">
      <span><h3>Detalle del Producto</h3></span>
      {console.log("InfoProduct:", infoProduct)}{" "}
      
      <ItemDetail data={infoProduct} />
    </div>
  );
};

export default ItemDetailContainer;
