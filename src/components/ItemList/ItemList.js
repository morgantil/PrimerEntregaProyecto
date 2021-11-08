import React from "react";
import Item from "../Item/Item";

const ItemList = ({ productos }) => {
  return (
    <>

    <div className="row">
    
        {productos.map((producto) => {
          return (
            <Item
              key={producto.id}
              id={producto.id}
              title={producto.title}
              description={producto.description}
              image={producto.img}
              price={producto.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default ItemList;
