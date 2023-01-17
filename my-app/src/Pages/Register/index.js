import React, { useState } from "react";

import "./index.css";
import Header from "../../Components/Header/index";
import Footer from "../../Components/Footer";

const Register = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState(Number);
  const [email, setEmail] = useState("");
  const [confirmarEmail, setConfirmarEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  function pararEventoForm(e) {
    e.preventDefault();
  }

  const [dados, setDados] = useState({});
  const handleRadioChange = (value) => {
    setCurrentValue(value);
  };
  const [currentRadioValue, setCurrentValue] = React.useState("on");
  function pegarDados(e) {
    setDados({ [e.target.name]: e.target.value });
  }

  return (
    <div className="register">
      <Header />
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
            <button onSubmit={""}>
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
        </form>
      </div>
      <Footer />
    </div>
  );
};
export default Register;
