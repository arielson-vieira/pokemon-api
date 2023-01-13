import React, { useState } from "react";

import "./index.css";
import Header from "../Header/index";
import Footer from "../Footer";

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
          <h1>Digite seus dados.</h1>
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
          <input type="submit" />
        </form>
      </div>
      <Footer/>
    </div>
  );
};
export default Register;
