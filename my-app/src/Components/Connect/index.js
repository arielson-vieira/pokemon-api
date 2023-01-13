import React, { useState } from "react";
import "./index.css";

import Footer from "../Footer";

import Header from "../Header/index";

const Connect = () => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <div className="pageConnect">
      <Header />
      <div className="formContainer">
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

          {/* <input type={'submit'}/> */}
        </form>
      </div>
      <Footer />
    </div>
  );
};
export default Connect;
