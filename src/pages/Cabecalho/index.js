import React from "react";
import { Link} from "react-router-dom";
import "./styles.css";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function Cabecalho() {

  return (
    <div>
    <nav>
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="right hide-on-med-and-down">      
          <li>
            <Link id="menuitem" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link id="menuitem" to="/profileuser">
            </Link>
          </li>
          <li>
            <Link id="menuitem" to="/login">
              login
            </Link>
          </li>
          <li>
          <Link  to="/carrinho" ><ShoppingCartIcon style={{ color: "black" }} /></Link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
}
