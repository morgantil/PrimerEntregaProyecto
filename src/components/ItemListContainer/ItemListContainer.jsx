import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router";
import db from "../../firebase";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore/lite";
import { Collection, ThreeDotsVertical } from "react-bootstrap-icons";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [productosCatid, setProductosCatid] = useState([]);
  const { catId } = useParams();

  

  async function getItems(db) {
    let itemsCol = catId
      ? query(collection(db, "productos"), where("category", "==", catId))
      : collection(db, "productos");
    const itemSnapshot = await getDocs(itemsCol);
    const listaItem = itemSnapshot.docs.map((doc) => doc.data());
    return setProductos(listaItem);
  }

  useEffect(() => {
   
    getItems(db);
  }, [catId]);

  return (
    <>
      <div className={"container"}>
        <ItemList productos={productos} />
      </div>
    </>
  );
};
export default ItemListContainer;
