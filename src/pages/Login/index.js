import React, { useState, useEffect } from "react";
import "./styles.css";
import { Link, useHistory } from "react-router-dom";
import apiSevice from "../../services/api";
import { FiLogIn } from "react-icons/fi";
import Cabecalho from "../Cabecalho";

export default function Login() {
  const history = useHistory();
  const [username, setLogin] = useState("");
  const [password, setSenha] = useState("");
  const [load, setload] = useState(false);
  const [FildErro, setFildErro] = useState(false);
  const [UserPass, setUserPass] = useState(false);

  useEffect(() => {
    let store = JSON.parse(localStorage.getItem("ecommerce"));
    if (store !== null) {
      history.push("/");
    }
  }, [history]);

  async function handleLogin(e) {
    e.preventDefault();
    setUserPass(false);
    setFildErro(false);
    if (username !== "" || password !== "") {
      setload(true);

      apiSevice
        .post("/auth/login", {
          username,
          password,
        })
        .then((response) => {
          localStorage.clear();
          localStorage.setItem("ecommerce", JSON.stringify(response.data));
          history.push("/");
          setload(false);
        })
        .catch((err) => {
          setload(false);
          console.log(err);
          setUserPass(true);
        });
    } else {
      setFildErro(true);
    }
  }

  return (
    <div className="row">
      <Cabecalho/> 
      <div background="https://s3.ca-central-1.amazonaws.com/shopizer-lightsail/files/DEFAULT/slider2.jpg" className="login-container col s12 m8 offset-m2 l6 offset-l3 xl4 offset-xl4">
        <section className="form col s8 offset-s2">
          <form onSubmit={handleLogin}>
            <h1 id="adotei">Moveis eComerce</h1>
            {UserPass ? (
              <span id="erro">Usuário ou Senha incorreto</span>
            ) : (
              <p></p>
            )}
            <input
              placeholder="Login"
              value={username}
              onChange={(e) => setLogin(e.target.value)}
            ></input>
            {FildErro ? <span id="erro">campo obrigatório</span> : null}

            <input
              placeholder="Senha"
              type="password"
              value={password}
              onChange={(e) => setSenha(e.target.value)}
            ></input>
            {FildErro ? <span id="erro">campo obrigatório</span> : null}
            {!load ? (
              <button
                className={"button btn waves-effect waves-light"}
                type="submit"
              >
                Entrar
              </button>
            ) : (
              <div className="progress">
                <div className="indeterminate"></div>
              </div>
            )}

            <Link className="row" to="/registeruser">
              {/* <Link className="fa fa-facebook" to="/adocao"></Link>
            <Link className="fa fa-google" to="/adocao"></Link> */}
              <div className="col s12">
                <FiLogIn size={16} color="#3b5998" />
                <span id="cadastro">Cadastrar</span>
                
              </div>
            </Link>
          </form>
        </section>
      </div>
    </div>
  );
}