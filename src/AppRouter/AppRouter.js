import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainter/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import NavBar from "../components/NavBar/NavBar";
import Home from "../pages/Home"
import Detail from "../pages/Detail"
import NoFound from "../pages/NoFound"
const AppRouter = () => {
  return (
    <BrowserRouter>
    <NavBar/>
      <Switch>
      <Route exact path="/category/:catId" component={Home}/>
        <Route exact path="/detalle/:productId" component={Detail}/>
      <Route exact path="/" component={Home}/>
        <Route  path="*" component={NoFound}>
          
        </Route>
     
     


      </Switch>{" "}
    
    </BrowserRouter>
  );
};

export default AppRouter;
