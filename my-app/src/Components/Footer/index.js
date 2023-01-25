import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./index.css";
import iconPokemon from "../../Assets/Icon/iconPikachu.png";
import { useAuth } from "../../Services/Providers/auth";


const Footer = () => {
  const { userConnect, setUserConnect } = useAuth();

  const { userPublic, setUserPublic } = useAuth();
  const navigate = useNavigate();

  function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function goToHome() {
    navigate("/");
    goToTop();
  }

  return (
    <div className="footerContainer">
      <div className="containerInfo">
        <div className="nameLeft">
          <Link to="/" onClick={goToTop}>
            Pokemon Origins
          </Link>
        </div>
        <div className="hiddenMobile">
          <div className="iconFooter" onClick={goToHome}>
            <img src={iconPokemon} alt="" />
          </div>
        </div>
        <div className="nameRight">
        {userConnect && <Link to="/pokemons">Pokemons</Link>}
          <Link to="/"> Filmes</Link>
        </div>
      </div>

      <div className="copyright">
        <footer>
          {" "}
          © Copyright 2000 -{new Date().getFullYear()} Pokemon Origins
        </footer>
      </div>
    </div>
  );
};
export default Footer;
