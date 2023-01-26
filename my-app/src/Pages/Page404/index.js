import React from "react";
import "./index.css";

import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();

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
    <div className="page404All">
      <div className="page404Container">
        <h1>ERROR 404: Página não encontrada</h1>
        <button onClick={goToHome}>VOLTAR PARA O INÍCIO</button>
      </div>
    </div>
  );
};
export default Page404;
