import "./styles.css";
import React, { useState } from "react";
import Cabecalho from "../Cabecalho/index.js";
import apiService from "../../services/api";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router";

export default function PainelUser() {
  const history = useHistory();
  const [password, setPassword] = useState("");
  let store = JSON.parse(localStorage.getItem("ecommerce"));
  var decoded = jwt_decode(store.access_token);


  async function SendData(e) {
    e.preventDefault();
    const data = {
      id: decoded.id,
      password,

    };

    apiService
      .patch("/user", data)
      .then((response) => {
        history.push("/");
        
      })
      .catch((e) => {
        console.log(e);
        
      });
  }




  
  return (
    <div>
      <Cabecalho />
      <div className="caixaRegistro col s12 m8 offset-m2 l6 offset-l3 xl4 offset-xl4">
        <section className="col s12 sectionbox">
          <div className="col s2"></div>
          <div className="col s12 m6 offset-m1">
            <center>
              <h5 >Trocar senha </h5>
            </center>
          </div>
        </section>
      </div>

      <form onSubmit={SendData} className="col s6 offset-s3">
        <input
          placeholder="insira a nova senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="button btn waves-effect waves-light"
          type="submit"
          name="action"
          onClick = {()=>{}}
        >
          Mudar senha
        </button>
      </form>
    </div>
  );
}
