import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CabecalhoUser from "./pages/CabecalhoUser";
import Carrinho from "./pages/carrinho";
import Home from "./pages/home";
import Login from "./pages/Login";
import RegisterUser from "./pages/RegisterUser";
export default function Routes() {

  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/carrinho" exact component={Carrinho} />
        <Route path="/registeruser" component={RegisterUser} />
        <Route path="/painel" component={CabecalhoUser}/>

      </Switch>
    </BrowserRouter>
  );
}
