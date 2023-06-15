import { IconButton } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ReturnButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const home = location.pathname === "/home";
  const login = location.pathname === "/";
  const shouldRenderReturnButton = !(home || login);

  const buttonStyle = {
    position: "fixed",
    top: 25,
    left: 290,
    zIndex: 9999,
  };

  return (
    shouldRenderReturnButton && (
      <IconButton
        variant="contained"
        style={buttonStyle}
        onClick={() => navigate(-1)}
        sx={{ border: "2px solid #fff" }}
      >
        <ArrowBackRoundedIcon sx={{ color: "#fff" }} />
      </IconButton>
    )
  );
};

export default ReturnButton;
