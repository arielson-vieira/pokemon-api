// import React, { useEffect, useState } from "react";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import iconPokeball from "../../Assets/Icon/iconPokeball.png";

export default function CardHomePage({
  nameCard,
  imageCard,
  powerCard,
  idCard,
  heightCard,
  weightCard,
}) {
  return (
    <Card
      sx={{
        maxWidth: "300px",
        minWidth: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        maxHeight: "420px",
        minHeight: "4px",
        backgroundColor: "#008584",
        textAlign: "center",
        alignItems: "center",
      }}
      className="cardModel"
    >
      <CardMedia
        sx={{ height: 130 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <div className="id">{idCard}</div>
      <CardContent>
        <div className="image">
          <img src={imageCard}></img>
        </div>

        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="positionNameCard"
        >
          <div className="nameCard">{nameCard}</div>
        </Typography>
        <Typography variant="body2" color="text.secondary" className="pokeData">
          <div className="power"><span>Power: {powerCard}</span></div>
          <div className="height"><span>Height: {heightCard}</span></div>
          <div className="weight"><span>Weight: {weightCard}</span></div>
        </Typography>
      </CardContent>

      <CardActions>
        <div>
          <img src={iconPokeball} className="iconCard"></img>
        </div>
      </CardActions>
    </Card>
  );
}
