import "materialize-css";
import { Button, SideNavItem, Icon, SideNav } from "react-materialize";
import React from "react";
import logodotei from "../../assets/imagens/logo.jpg";
import doteibg from "../../assets/imagens/adoteibg.png";
import "./styles.css";
import { Link, useHistory } from "react-router-dom";

export default function SideMenu() {
  const [nome, setNome] = React.useState("você!");
  const [role, setRole] = React.useState(1);
  const history = useHistory();

  React.useEffect(() => {
    let saved = JSON.parse(localStorage.getItem("adotei@token"));
    if (saved !== null) {
      setNome(saved.user.name);
      setRole(saved.role);
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <div>
      <style>
        {`
            #root > div > div {
              z-index: 99999 !important;
            }
          `}
      </style>
      <SideNav
        id="SideNav-10"
        options={{
          draggable: true,
        }}
        trigger={
          <Button className="btnMenu" node="button">
            <Icon>menu</Icon>
          </Button>
        }
      >
        <SideNavItem
          user={{
            background: doteibg,
            email: "Adote um Pet!",
            image: logodotei,
            name: "Adotei",
          }}
          userView
        />
        {role === 2 ? (
          <SideNavItem icon={<Icon>assessment</Icon>}>
            <Link id="menuitem" to="/profileong">
              Admin
            </Link>
          </SideNavItem>
        ) : (
          <div></div>
        )}

        <SideNavItem icon={<Icon>favorite</Icon>}>
          <Link id="menuitem" to="/adocao">
            Home
          </Link>
        </SideNavItem>

        <SideNavItem divider />
        <SideNavItem subheader>Menu do usuário</SideNavItem>

        <SideNavItem icon={<Icon>person</Icon>}>
          <Link id="menuitem" to="/profileuser">
            Perfil de {nome}
          </Link>
        </SideNavItem>
        <SideNavItem waves>
          <Icon>exit_to_app</Icon>
          <a
            onClick={() => {
              logout();
            }}
            id="menuitem"
          >
            logout
          </a>
        </SideNavItem>
      </SideNav>
    </div>
  );
}
