import React from 'react'
import "./NavBar.css";
import { Link } from "react-router-dom";
import {Container,Navbar,Nav} from "react-bootstrap"
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
    return (<>
        <div>
       <Navbar expand="lg">
  <Container>
    <Link to="/"><Navbar.Brand >LOGO</Navbar.Brand></Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      {/* <Link to="/category/calzado">  <Nav.Link >CALZADO</Nav.Link></Link>  */}
      <Link to="/category/calzado"> CALZADO</Link>
      <Link to="/category/indumentaria"> INDUMENTARIA</Link>
      {/*    <Nav.Link>INDUMENTARIA</Nav.Link></Link>  */}
        
      </Nav>
    </Navbar.Collapse>
    <div><CartWidget/></div>
  </Container>
</Navbar>

        </div>
       
    </>)
}

export default NavBar
