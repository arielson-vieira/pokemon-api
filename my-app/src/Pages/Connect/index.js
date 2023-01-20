import React, { useEffect, useState } from "react";
import "./index.css";

import Footer from "../../Components/Footer";

import Header from "../../Components/Header";

const Connect = () => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    goToTop();
  }, []);

  return (
    <div className="pageConnect">
      <Header />
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
            <div className="allButtonConnect">
              <button onSubmit={""}>
                <div className="buttonConnect">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
                <span>Logar</span>
              </button>
            </div>

            <div className="forgotPassword">
              <button>Esqueceu a senha?</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Connect;
