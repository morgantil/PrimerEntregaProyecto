import React, { useContext } from "react";
import "./CartWidget.css";
import { Cart } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
import CartContex from "../../context/CartContex";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalItems } = useContext(CartContex);

  return (
    <>
      {totalItems() > 0 && (
        <div>
          <div>
            {" "}
            <Link to={`/carrito`}>
              <Button className={`cart-widget`}>
                <Cart /> <p id="cant">{totalItems()}</p>
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default CartWidget;
