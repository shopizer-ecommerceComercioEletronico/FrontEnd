import React, { useState, useEffect } from "react";
import "./styles.css";
import { Link, useHistory } from "react-router-dom";
import apiSevice from "../../services/api";
import { FiLogIn } from "react-icons/fi";

export default function Login() {
  const history = useHistory();
  const [username, setLogin] = useState("");
  const [password, setSenha] = useState("");
  const [load, setload] = useState(false);
  const [FildErro, setFildErro] = useState(false);
  const [UserPass, setUserPass] = useState(false);

  useEffect(() => {
    let store = JSON.parse(localStorage.getItem("adotei@token"));
    if (store !== null) {
      history.push("/adocao");
    }
  }, [history]);

  

  return (
   <div>
     <h2>Login</h2>
      <div>
        <form>
          <div className="form-group">
            <label for="username">Username</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label for="inputPassword">Senha</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
          </div>
          <div className="form-group">
            <button className="btn btn-lg btn-primary btn-block" type="submit">Entrar</button>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Criar Conta</button>
          </div>
        </form>
      </div>
      

   </div>
  );
}

