import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/Auth";
import "./Header.css";

function Header() {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="header">
      <header>
        <div className="options">
          <div className="foto-profile"></div>
          <h4>Gabriel de Oliveira</h4>
          <p>Administrador do restaurante</p>
          <input type="checkbox" id="btnControl" />
          <label htmlFor="btnControl">
            <img src="./setab.png" alt="" />
          </label>
          <div className="logout">
            <div className="icone-perfil"></div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
