import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router";
import { mockProducts } from "../../data/data";
import db from '../../firebase'
import { getFirestore,collection,getDocs,doc,query,where} from "firebase/firestore/lite";
import { Collection, ThreeDotsVertical } from "react-bootstrap-icons";
const ItemDetailContainer = () => {
  const [infoProduct, setInfoProduct] = useState([]);

  const {productId}=useParams();

  async function getProducts(db){
    const productosCol=query(collection(db, "productos"),where("id", "==", Number(productId) ));
    const productosSnapshop=await getDocs(productosCol);
    const productoslist=productosSnapshop.docs.map(doc=>doc.data());
	
    return setInfoProduct(productoslist);
  }    

useEffect(()=>{
  getProducts(db)
  
},[productId])
    
  
  

  return (
    <div className="container3">
      <span><h3>Detalle del Producto</h3></span>


      
      <ItemDetail infoProduct={infoProduct} />
    </div>
  );
};

export default ItemDetailContainer;
