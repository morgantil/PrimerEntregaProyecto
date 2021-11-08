import React, { useState, useContext } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import CartContex from "../../context/CartContex";

const NavBar = () => {
  const { tof } = useContext(CartContex);

  return (
    <>
      <div>
        <Navbar expand="lg">
          <Container>
            <Link to="/">
              <Navbar.Brand>
                <img className={"logo"} src={`/img/logo.png`} alt="" />
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className=" ContCategorias me-auto">
                <Link className={"categorias"} to="/category/calzado"> CALZADO</Link>
                <Link  className={"categorias"} to="/category/indumentaria"> INDUMENTARIA</Link>
              </Nav>
            </Navbar.Collapse>
            <Link to={`/carrito`}>
              <div className={`cart-widget ${tof ? "active" : ""}`}>
                <CartWidget />
              </div>
            </Link>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
