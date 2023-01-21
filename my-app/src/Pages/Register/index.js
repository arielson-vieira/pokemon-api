import React, { useEffect, useState } from "react";

import "./index.css";
import Header from "../../Components/Header/index";
import Footer from "../../Components/Footer";
import LoginSucess from "../../Assets/Icon/iconLoginSucess.png";
import { useAuth } from "../../Services/Providers/auth";

const Register = () => {
  const { userUnregistered, setUserUnregistered } = useAuth();
  const { userRegisterDone, setUserRegisterDone } = useAuth();

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState(Number);
  const [email, setEmail] = useState("");
  const [confirmarEmail, setConfirmarEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [dados, setDados] = useState({});
  const handleRadioChange = (value) => {
    setCurrentValue(value);
  };
  const [currentRadioValue, setCurrentValue] = React.useState("on");

  function pegarDados(e) {
    setDados({ [e.target.name]: e.target.value });
  }
  function pararEventoForm(e) {
    e.preventDefault();
  }
  function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function userRegister(e) {
    setUserRegisterDone(true)
    setUserUnregistered(false)
    
  }

  useEffect(() => {
    goToTop();
  }, []);

  return (
    <div className="register">
      <Header />
      
      <div className="registerData">
      {userUnregistered && ( 
      <div className="formData">
        <form onSubmit={pararEventoForm}>
          <input
            type={"text"}
            placeholder="Nome"
            onChange={pegarDados}
            name="nome"
          />
          <input
            type={"text"}
            placeholder="Sobrenome"
            onChange={pegarDados}
            name="sobrenome"
          />
          <input
            type={"email"}
            placeholder="E-mail"
            onChange={pegarDados}
            name="email"
          />
          <input
            type={"email"}
            placeholder="Confirme o e-mail"
            onChange={pegarDados}
            name="confirmarEmail"
          />
          <input
            type={"password"}
            placeholder="Senha"
            onChange={pegarDados}
            name="senha"
          />
          <input
            type={"password"}
            placeholder="Confirme a senha"
            onChange={pegarDados}
            name="confirmarSenha"
          />

          <div className="allButtonRegister">
            <button onSubmit={""} onClick={userRegister}>
              <div className="buttonRegister">
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
              <span>Cadastrar</span>
            </button>
          </div>
        </form></div>)}

        {userRegisterDone && (
          <div className="registerDone">
            <p>Cadastro realizado, bem-vindo!</p>
            <img src={LoginSucess} />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
export default Register;
