import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./index.css";
import iconPokemon from "../../Assets/Icon/iconPikachu.png";

const Footer = () => {
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
        <div className="iconFooter" onClick={goToHome}>
          <img src={iconPokemon} />
        </div>
        <div className="nameRight">
          <Link to="/pokemons">Pokemons</Link>
          <Link to="/"> Filmes</Link>
          <a href="https://www.google.com/search?q=pokemon+wallpaper+4k&tbm=isch&ved=2ahUKEwih5qvj0cz8AhXwBLkGHbgPDwUQ2-cCegQIABAA&oq=pokemon+wallpaper+4k&gs_lcp=CgNpbWcQAzIECCMQJzIICAAQgAQQsQMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoGCAAQCBAeUNsJWKsPYNITaABwAHgAgAFziAG9A5IBAzAuNJgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=lYzFY-HHOfCJ5OUPuJ-8KA&bih=800&biw=1440">
            Wallpappers
          </a>
        </div>
      </div>

      <div className="copyright">
        <footer> © Copyright 2000 -{new Date().getFullYear()} Pokemon Origins</footer>
      </div>
    </div>
  );
};
export default Footer;
