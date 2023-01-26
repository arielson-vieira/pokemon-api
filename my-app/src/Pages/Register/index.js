import React, { useEffect } from "react";

import "./index.css";
import Header from "../../Components/Header/index";
import Footer from "../../Components/Footer";
import { useAuth } from "../../Services/Providers/auth";
import Form from "../../Components/Form";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const {
    setUserConnect,
    setUserPublic,
    userRegisterDone,
    userUnregistered,
    time,
    setTime,
  } = useAuth();

  const navigate = useNavigate();

  const timer = () => {
    return setTimeout(() => {
      const currentTime = time - 1;
      setTime(currentTime);
    }, 1000);
  };

  function goToConnect() {
    setUserConnect(true);
    setUserPublic(false);
    navigate("/");
    goToTop();
  }

  function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    const timeout = timer();
    goToTop();
    if (time === 0) {
      clearTimeout(timeout);
      goToConnect();
    }
  });

  return (
    <div className="register">
      <Header />
      <div className="registerData">
        {userUnregistered && (
          <div className="formLocation">
            <Form />
          </div>
        )}
        {userRegisterDone && (
          <div className="registerDone">
            <p>Cadastro realizado!!!</p>
            <div className="hiddenMobile">
              <p>Você será redirecionado em...{time} </p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
export default Register;
