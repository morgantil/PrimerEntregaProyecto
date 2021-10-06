import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { mockProducts } from "../../data/data";
import { useParams } from "react-router";

const ItemListContainer = ( ) => {

  const [productos,setProductos]=useState([]);
  const {catId}=useParams();
  console.log(useParams());
  console.log(catId);

  const promesa = new Promise((resolve)=>{

      setTimeout(()=>{

          
          resolve(mockProducts);


      },2000)



  })

  useEffect(() => {
      
      promesa.then((res)=>{
        catId ? setProductos(res.filter((i)=>(i.category===catId))):setProductos(res);
        
      })
    
  }, [catId])





    return (<>



 <div><ItemList productos={productos}/>
 
 </div></>
    );

};
export default ItemListContainer;



