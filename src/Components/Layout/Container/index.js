import { Box, Container } from "@mui/material";
import React from "react";

const ContentContainer = ({ children }) => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        marginLeft: "25%",
        paddingTop: "5%",
        width: "100%",
      }}
    >
      {children}
    </Container>
  );
};

export default ContentContainer;
