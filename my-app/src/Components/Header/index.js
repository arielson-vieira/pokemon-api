import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

import iconPokemon from "../../Assets/Icon/iconPikachu.png";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Header = (params) => {

  const navigate = useNavigate();
  function goToConnect() {
    navigate("/conectar");
  }
  function goToRegister() {
    navigate("/registro");
  }

  const notify = () =>
    toast.error("Dados cadastrados com sucesso!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    function goToTop() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth',
      });
  }
  function goToHome() {
    navigate("/");
    goToTop();
  }
  return (
    <header className="header">
      <div className="iconsLeft">
        <img src={iconPokemon} onClick={goToHome}/>

        <Link to="/" onClick={goToTop}>HOME</Link>
        <Link to="/pokemons">POKEMONS</Link>
        <Link to="/">FILMES</Link>
        <Link to="/">WALLPAPPERS</Link>
      </div>

      <div className="iconsRight">
        <input type="text" placeholder="pesquisar" />

        <button onClick={goToConnect}>
          <span className="buttonsHome">CONECTAR</span>
        </button>

        <button onClick={goToRegister}>
          <span className="buttonsHome">REGISTRAR</span>
        </button>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </header>
  );
};
export default Header;
