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
import iconCard from "../../Assets/Icon/iconPikachu.png"

export default function CardHomePage({
  nameCard,
  imageCard,
  powerCard,
  idCard,
  heightCard,
  weightCard,
  typeCard,
}) {
  const getCardIcon = (typeCard) => {

    if (typeCard === "poison") {
      return <img src={iconCard} alt='' className="icon"/>;

    } else if (typeCard === "fire") {
      return "Texto 2";

    } else if (typeCard === "flying") {
      return "Texto 3";

    } else if (typeCard === "water") {
      return "Texto 4";
    } else if (typeCard === "bug") {
      return "Texto 5";

    } else if (typeCard === "normal") {
      return "Texto 6";

    } else if (typeCard === "fairy") {
      return "Texto 7";
    } else if (typeCard === "ground") {
      return "Texto 8";

    } else if (typeCard === "electric") {
      return "Texto 9";

    } else if (typeCard === "fighting") {
      return "Texto 10";

    } else if (typeCard === "grass") {
      return "Texto 11";

    } else if (typeCard === "psychic") {
      return "Texto 12";

    } else if (typeCard === "ice") {
      return "Texto 13";

    } else if (typeCard === "steel") {
      return "Texto 14";

    } else if (typeCard === "rock") {
      return "Texto 15";

    } else if (typeCard === "dragon") {
      return "Texto 16";

    } else if (typeCard === "dark") {
      return "Texto 17";

    } else if (typeCard === "ghost") {
      return "Texto 18";
      
    } else {
      return "desconhecido";
    }
  };

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
        backgroundColor: "white",
        textAlign: "center",
        alignItems: "center",
        border: "solid",
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
          <div className="power">
            <span>Power: {powerCard}</span>
          </div>
          <div className="height">
            <span>Height: {heightCard}</span>
          </div>
          <div className="weight">
            <span>Weight: {weightCard}</span>
          </div>
        </Typography>
      </CardContent>
      <div className="type">
        <span>{getCardIcon(typeCard)}</span>
        {/* {typeCard === "fire" ? <span>fogo</span> : " "}
        {typeCard === "poison" ? <span>veneno</span> : " "}
        {typeCard === "water" ? <span>água</span> : " "}
        {typeCard === "flying"? <span>voador</span> : typeCard} */}
      </div>
      <CardActions></CardActions>
    </Card>
  );
}
