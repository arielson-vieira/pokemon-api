import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

import iconPokemon from "../../Assets/Icon/iconPikachu.png";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import IconUser from "../../Assets/Icon/iconPokeball.png"

const Header = (params) => {
  const navigate = useNavigate();
  function goToConnect() {
    navigate("/conectar");
    goToTop();
  }
  function goToRegister() {
    navigate("/registro");
    goToTop();
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
      behavior: "smooth",
    });
  }
  function goToHome() {
    navigate("/");
    goToTop();
  }
  return (
    <header className="header">
      <div className="iconsLeft">
        <img src={iconPokemon} onClick={goToHome} />

        <Link to="/" onClick={goToTop}>
          HOME
        </Link>
        <Link to="/pokemons">
          POKEMONS
        </Link>
        <Link to="/" onClick={goToTop}>
          FILMES
        </Link>
        <Link to="/" onClick={goToTop}>
          WALLPAPPERS
        </Link>
      </div>

      <div className="iconsRight">
        <div className="group">
          <svg className="iconInput" aria-hidden="true" viewBox="0 0 24 24">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
          <input placeholder="Pesquisar" type="search" class="inputSearch" />
        </div>

        <button onClick={goToConnect}>
          <span className="buttonsHome">CONECTAR</span>
        </button>

        <button onClick={goToRegister}>
          <span className="buttonsHome">REGISTRAR</span>
        </button>
        <div className="userConnected">
        <button>Username</button>
        <img src={IconUser}/>

        </div>
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
