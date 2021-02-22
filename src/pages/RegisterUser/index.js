import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import apiService from "../../services/api";
import "./styles.css";
import Cabecalho from "../Cabecalho";

export default function RegisterUser() {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function SendData() {

    const data = {
      firstName,
      lastName,
      country,
      state,
      user,
      password,
      email,
    };

    apiService
      .post("/user/register", data)
      .then((response) => {
        console.log("Cadastro realizado com sucesso", response.status);
        history.push("/login");
      })
      .catch((err) => {
        if (
          err.response.data.message &&
          err.response.data.message === "usuário já cadastrado"
        )
          console.log("Erro no cadastro tente novamente: ", err.response.data);
      });
  }

  return (
    <div className="row">
      <Cabecalho />
      <div className="caixaRegistro col s12 m8 offset-m2 l6 offset-l3 xl4 offset-xl4">
        <section className="col s12 sectionbox">
          <div className="col s2"></div>
          <div className="col s12 m6 offset-m1">
            <center><h5 id="adotei">Registro </h5></center>
          </div>
        </section>
        <form onSubmit={SendData} className="col s6 offset-s3">
          <input
            placeholder="Primeiro nome"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            placeholder="Sobrenome"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            placeholder="Usuário"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            placeholder="senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Pais"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <input
            placeholder="Estado"
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <button
            onClick={() => SendData()}
            className="button btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );

  /*
                        <div className="input-group">
                        <input placeholder="Endereço"
                     value={adress}
                     onChange={e => setAdress(e.target.value)}                         
                        />
                        <input placeholder="Cidade"
                    value={city}
                    onChange={e => setCity(e.target.value)}                          
                        />
                        <input placeholder="UF" style={{whidth:80}}
                    value={state}
                    onChange={e => setstate(e.target.value)}                          
                        />
                    </div>
    
    
    */
}
