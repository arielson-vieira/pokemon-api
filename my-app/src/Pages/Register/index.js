import React, { useEffect, useState } from "react";

import "./index.css";
import Header from "../../Components/Header/index";
import Footer from "../../Components/Footer";
import LoginSucess from "../../Assets/Icon/iconLoginSucess.png";
import { useAuth } from "../../Services/Providers/auth";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Form from "../../Components/Form"
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
  const {  userConnect,
    setUserConnect,
    userPublic,
    setUserPublic,
    userRegisterDone,
    setUserRegisterDone,
    userUnregistered,
    setUserUnregistered,
    time,
    setTime,} = useAuth();
 

  function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const navigate = useNavigate();

  function goToConnect() {
        setUserConnect(true);
        setUserPublic(false);
        navigate("/");
        goToTop();
      }

  const timer = () => {
    return setTimeout(() => {
        const currentTime = time - 1;
        setTime(currentTime);
    }, 1000)
}

  useEffect(() => {
    const timeout = timer();

    if (time === 0) {
        clearTimeout(timeout);
        goToConnect()
        
        
    }
});


  return (
    <div className="register">
      <Header />
      <div className="registerData">
        {userUnregistered && <div className="formLocation">
          <Form/>
          </div>}
        {userRegisterDone && (
          <div className="registerDone">
            <p>Cadastro realizado, bem-vindo!</p>
            <p>Você será redirecionado em...{time} </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
export default Register;
