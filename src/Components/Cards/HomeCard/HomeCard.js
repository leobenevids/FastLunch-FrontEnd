import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomeCard = ({ image, title, route }) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        width: 300,
        height: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardMedia sx={{ height: "50%", objectFit: "cover"}}>
        <img src={image} alt={title} />
      </CardMedia>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          {title}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center", width: "100%" }}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#30353B", color: "#fff", width: "80%" }}
          onClick={() => navigate(route)}
        >
          Ir
        </Button>
      </CardActions>
    </Card>
  );
};

export default HomeCard;
