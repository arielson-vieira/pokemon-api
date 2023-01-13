import React from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  function goToAllPokemons() {
    navigate("/pokemons");
  }

  return (
    <div className="main">
      <div className="infoMain">
        <h1>
          POKEMON<span> Origins</span>
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and Why
          do we use it? It is a long established fact that a reader will be
          distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed to using 'Content here,
          content here', making it look like readable English. Many desktop
          publishing packages and web page editors now use Lorem Ipsum as their
          default model text, and a search for 'lorem ipsum' will uncover many
          web sites still in their infancy. Various versions have evolved over
          the years, sometimes by accident, sometimes on purpose (injected
          humour and the like).
        </p>
        
        <button onClick={goToAllPokemons}>iniciar minha aventura</button>
      </div>
    </div>
  );
};
export default Main;
