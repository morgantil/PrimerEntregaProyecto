import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { mockProducts } from "../../data/data";
import { useParams } from "react-router";
import db from '../../firebase'
import { getFirestore,collection,getDocs,doc,query,where} from "firebase/firestore/lite";
import { Collection, ThreeDotsVertical } from "react-bootstrap-icons";

const ItemListContainer = ( ) => {

  const [productos,setProductos]=useState([]);
  const [productosCatid,setProductosCatid]=useState([]);
  const {catId}=useParams();
  
 /*
  async function getProducts(db){

                      //TRAIGO EN EL HOME CATEGORIAS MEZCLADAS
    const productosCol=query(collection(db, "productos"));
    const productosSnapshop=await getDocs(productosCol);
    const productoslist=productosSnapshop.docs.map(doc=>doc.data());

                    // QUERY PARA FILTRAR POR CATEGORIA
    //const productosCatid=query(collection(db, "productos"),where("category", "==", String(catId) ));
    
    
    
	 
    return setProductos(productoslist);
  }    
*/

async function getItems(db){

  let itemsCol=catId
  ?query(
  collection(db,"productos"),
  where("category","==",catId)
  )
  :
  collection(db,"productos");
  const itemSnapshot=await getDocs(itemsCol);
  const listaItem=itemSnapshot.docs.map(doc=>doc.data());
  return setProductos(listaItem)
  
  }
  
  

useEffect(()=>{
  //getProducts(db)
  getItems(db)
  
},[catId])





    return (<>



 <div><ItemList productos={productos}/>
 
 </div></>
    );

};
export default ItemListContainer;



