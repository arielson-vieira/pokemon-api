// import React, { useEffect, useState } from "react";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import IconFire from "../../Assets/Icon/iconFire.png";
import IconPoison from "../../Assets/Icon/iconPoison.png";
import IconFlying from "../../Assets/Icon/iconFlying.png";
import IconWater from "../../Assets/Icon/iconWater.png";

import IconPower from "../../Assets/Icon/iconPower.png";
import IconHeight from "../../Assets/Icon/iconHeight.png";

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
      return <img src={IconPoison} alt="" className="poison" />;
    } else if (typeCard === "fire") {
      return <img src={IconFire} alt="" className="fire" />;
    } else if (typeCard === "flying") {
      return <img src={IconFlying} alt="" className="flying" />;
    } else if (typeCard === "water") {
      return <img src={IconWater} alt="" className="water" />;
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

  const getPower = (powerCard) => {
    if (powerCard <= 68) {
      return (
        <span className="powerCardIcon">
          <img src={IconPower} alt="" />
        </span>
      );
    } else if (powerCard <= 136) {
      return (
        <span className="powerCardIcon">
          <img src={IconPower} alt="" />
          <img src={IconPower} alt="" />
        </span>
      );
    } else if (powerCard <= 204) {
      return (
        <span className="powerCardIcon">
          <img src={IconPower} alt="" />
          <img src={IconPower} alt="" />
          <img src={IconPower} alt="" />
        </span>
      );
    } else if (powerCard <= 272) {
      return (
        <span className="powerCardIcon">
          <img src={IconPower} alt="" />
          <img src={IconPower} alt="" />
          <img src={IconPower} alt="" />
          <img src={IconPower} alt="" />
        </span>
      );
    } else if (powerCard <= 340) {
      return (
        <span className="powerCardIcon">
          <img src={IconPower} alt="" />
          <img src={IconPower} alt="" />
          <img src={IconPower} alt="" />
          <img src={IconPower} alt="" />
          <img src={IconPower} alt="" />
        </span>
      );
    } else {
      return (
        <span className="powerCardIcon">
          <img src={IconPower} alt="" />
          <img src={IconPower} alt="" />
          <img src={IconPower} alt="" />
          <img src={IconPower} alt="" />
          <img src={IconPower} alt="" />
        </span>
      )
    }
  };

  const getHeigth = (heightCard) => {
    if (heightCard <= 8) {
      return (
        <span className="heightCardIcon">
          <img src={IconHeight} alt="" />
        </span>
      );
    } else if (heightCard <= 16) {
      return (
        <span className="heightCardIcon">
          <img src={IconHeight} alt="" />
          <img src={IconHeight} alt="" />
        </span>
      );
    } else if (heightCard <= 24) {
      return (
        <span className="heightCardIcon">
          <img src={IconHeight} alt="" />
          <img src={IconHeight} alt="" />
          <img src={IconHeight} alt="" />
        </span>
      )
    } else if (heightCard <= 32) {
      return (
        <span className="heightCardIcon">
          <img src={IconHeight} alt="" />
          <img src={IconHeight} alt="" />
          <img src={IconHeight} alt="" />
          <img src={IconHeight} alt="" />
        </span>
      )
    } else if (heightCard <= 40) {
      return (
        <span className="heightCardIcon">
          <img src={IconHeight} alt="" />
          <img src={IconHeight} alt="" />
          <img src={IconHeight} alt="" />
          <img src={IconHeight} alt="" />
          <img src={IconHeight} alt="" />
        </span>
      )
    } else {
      return (
        <span className="heightCardIcon">
          <img src={IconHeight} alt="" />
          <img src={IconHeight} alt="" />
          <img src={IconHeight} alt="" />
          <img src={IconHeight} alt="" />
          <img src={IconHeight} alt="" />
        </span>
      )
    }
  };

  const getWeidth = (weightCard) => {
    if (weightCard <= 180) {
      return <span>1bolinha</span>;
    } else if (weightCard <= 360) {
      return <span>2bolinha</span>;
    } else {
      return <span>5bolinhas</span>;
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
          <img src={imageCard} alt=""></img>
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
            <span>
              Power: {powerCard}
              {getPower(powerCard)}
            </span>
          </div>
          <div className="height">
            <span>
              Height: {heightCard}
              {getHeigth(heightCard)}
            </span>
          </div>
          <div className="weight">
            <span>
              Weight: {weightCard} {getWeidth(weightCard)}
            </span>
          </div>
        </Typography>
      </CardContent>
      <div className="type">
        <span>{getCardIcon(typeCard)}</span>
      </div>
      <CardActions></CardActions>
    </Card>
  );
}
