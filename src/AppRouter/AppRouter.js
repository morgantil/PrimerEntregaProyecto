import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainter/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import NavBar from "../components/NavBar/NavBar";
import Home from "../pages/Home"
import Detail from "../pages/Detail"
import NoFound from "../pages/NoFound"
import { CartProvider } from "../context/CartContex";
import CartContex from "../context/CartContex";
import Carrito from '../pages/Carrito'
const AppRouter = () => {
  return (
    <BrowserRouter>
    <CartProvider>
    <NavBar/>
      <Switch>
      <Route exact path="/category/:catId" component={Home}/>
        <Route exact path="/detalle/:productId" component={Detail}/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/carrito" component={Carrito}/>
        <Route  path="*" component={NoFound}>
          
        </Route>
     
     


      </Switch>
      </CartProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
