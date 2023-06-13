import { useState, useEffect } from "react";
import { AuthContext } from "./Auth";

const Permission = ({ children, permissions }) => {
  const [usuario, setUsuario] = useState(null);
  useEffect(() => {
    const recoveredUser = localStorage.getItem("usuario");
    if (recoveredUser) {
      setUsuario(JSON.parse(recoveredUser));
    }
  }, []);

  const userPermissions = usuario?.perfil;
  if (
    permissions.some((permission) => {
      return userPermissions?.includes(permission);
    })
  ) {
    return children;
  }
  return null;
};

export default Permission;
