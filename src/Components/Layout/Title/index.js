import { Paper, Typography } from "@mui/material";
import React from "react";

const Title = ({ title }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        background: "#111821",
        color: "#fff",
        opacity: "0.95",
        position: "fixed",
        top: 5,
        left: 370,
        zIndex: 9999,
        width: "80%"
      }}
    >
      <Typography variant="h5" m={2} padding={1}>
        {title}
      </Typography>
    </Paper>
  );
};

export default Title;
