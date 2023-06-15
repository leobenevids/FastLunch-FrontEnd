import React from "react";
import Alert from "@mui/material/Alert";

const CustomAlert = ({ showAlert, message, type }) => {
  return showAlert && <Alert severity={type}>{message}</Alert>;
};

export default CustomAlert;
