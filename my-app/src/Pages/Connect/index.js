import React, { useState } from "react";
import "./index.css";

import Footer from "../../Components/Footer"

import Header from "../../Components/Header"

const Connect = () => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  return (
      <div className="pageConnect">
        <Header/>
        <div className="formContainer">
          <div className="connect">
          <form>
            <div className="inputConnect">
              <input required="required" type="text" />
              <span>Login</span>
              <i></i>
            </div>
            <div className="inputPassword">
              <input required="required" type="password" />
              <span>Senha</span>
              <i></i>
            </div>
            <button className="buttonSubmit" onSubmit={''}>Enviar</button>
          </form>
          </div>
        </div>
        <Footer/>
      </div>
  );
};
export default Connect;
