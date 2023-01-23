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
import IconBug from "../../Assets/Icon/iconBug.png";
import IconNormal from "../../Assets/Icon/iconNormal.png";
import IconFairy from "../../Assets/Icon/iconFairy.png";
import IconGround from "../../Assets/Icon/iconGround.png";
import IconElectric from "../../Assets/Icon/iconElectric.png";
import IconFighting from "../../Assets/Icon/iconFighting.png";
import IconGrass from "../../Assets/Icon/iconGrass.png";
import IconPsychic from "../../Assets/Icon/iconPsychic.png";
import IconIce from "../../Assets/Icon/iconIce.png";
import IconSteel from "../../Assets/Icon/iconSteel.png";
import IconRock from "../../Assets/Icon/iconRock.png";
import IconDragon from "../../Assets/Icon/iconDragon.png";
import IconDark from "../../Assets/Icon/iconDark.png";
import IconGhost from "../../Assets/Icon/iconGhost.png";

import IconPower from "../../Assets/Icon/iconPower.png";
import IconHeight from "../../Assets/Icon/iconHeight.png";
import IconWeight from "../../Assets/Icon/iconWeight.png";

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
      return <img src={IconPoison} alt="" />;
    } else if (typeCard === "fire") {
      return <img src={IconFire} alt="" />;
    } else if (typeCard === "flying") {
      return <img src={IconFlying} alt="" />;
    } else if (typeCard === "water") {
      return <img src={IconWater} alt="" />;
    } else if (typeCard === "bug") {
      return <img src={IconBug} alt="" />;
    } else if (typeCard === "normal") {
      return <img src={IconNormal} alt="" />;
    } else if (typeCard === "fairy") {
      return <img src={IconFairy} alt="" />;
    } else if (typeCard === "ground") {
      return <img src={IconGround} alt="" />;
    } else if (typeCard === "electric") {
      return <img src={IconElectric} alt="" />;
    } else if (typeCard === "fighting") {
      return <img src={IconFighting} alt="" />;
    } else if (typeCard === "grass") {
      return <img src={IconGrass} alt="" />;
    } else if (typeCard === "psychic") {
      return <img src={IconPsychic} alt="" />;
    } else if (typeCard === "ice") {
      return <img src={IconIce} alt="" />;
    } else if (typeCard === "steel") {
      return <img src={IconSteel} alt="" />;
    } else if (typeCard === "rock") {
      return <img src={IconRock} alt="" />;
    } else if (typeCard === "dragon") {
      return <img src={IconDragon} alt="" />;
    } else if (typeCard === "dark") {
      return <img src={IconDark} alt="" />;
    } else if (typeCard === "ghost") {
      return <img src={IconGhost} alt="" />;
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
      );
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
      );
    } else if (heightCard <= 32) {
      return (
        <span className="heightCardIcon">
          <img src={IconHeight} alt="" />
          <img src={IconHeight} alt="" />
          <img src={IconHeight} alt="" />
          <img src={IconHeight} alt="" />
        </span>
      );
    } else if (heightCard <= 40) {
      return (
        <span className="heightCardIcon">
          <img src={IconHeight} alt="" />
          <img src={IconHeight} alt="" />
          <img src={IconHeight} alt="" />
          <img src={IconHeight} alt="" />
          <img src={IconHeight} alt="" />
        </span>
      );
    } else {
      return (
        <span className="heightCardIcon">
          <img src={IconHeight} alt="" />
          <img src={IconHeight} alt="" />
          <img src={IconHeight} alt="" />
          <img src={IconHeight} alt="" />
          <img src={IconHeight} alt="" />
        </span>
      );
    }
  };

  const getWeigth = (weightCard) => {
    if (weightCard <= 180) {
      return (
        <span className="weightCardIcon">
          <img src={IconWeight} alt="" />
        </span>
      );
    } else if (weightCard <= 360) {
      return (
        <span className="weightCardIcon">
          <img src={IconWeight} alt="" />
          <img src={IconWeight} alt="" />
        </span>
      );
    } else if (weightCard <= 540) {
      return (
        <span className="weightCardIcon">
          <img src={IconWeight} alt="" />
          <img src={IconWeight} alt="" />
          <img src={IconWeight} alt="" />
        </span>
      );
    } else if (weightCard <= 720) {
      return (
        <span className="weightCardIcon">
          <img src={IconWeight} alt="" />
          <img src={IconWeight} alt="" />
          <img src={IconWeight} alt="" />
          <img src={IconWeight} alt="" />
        </span>
      );
    } else if (weightCard <= 900) {
      return (
        <span className="weightCardIcon">
          <img src={IconWeight} alt="" />
          <img src={IconWeight} alt="" />
          <img src={IconWeight} alt="" />
          <img src={IconWeight} alt="" />
          <img src={IconWeight} alt="" />
        </span>
      );
    } else {
      return (
        <span className="weightCardIcon">
          <img src={IconWeight} alt="" />
          <img src={IconWeight} alt="" />
          <img src={IconWeight} alt="" />
          <img src={IconWeight} alt="" />
          <img src={IconWeight} alt="" />
        </span>
      );
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
            <span>Power: {powerCard} </span>
            <p>{getPower(powerCard)}</p>
          </div>
          <div className="height">
            <span> Height: {heightCard}</span>
            <p>{getHeigth(heightCard)}</p>
          </div>
          <div className="weight">
            <span>Weight: {weightCard}</span>
            <p>{getWeigth(weightCard)}</p>
          </div>
        </Typography>
      </CardContent>
      <div className="type">{getCardIcon(typeCard)}</div>
      <CardActions></CardActions>
    </Card>
  );
}
