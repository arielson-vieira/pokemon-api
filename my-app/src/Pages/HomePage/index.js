import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

import Header from "../../Components/Header";
import Main from "../../Components/Main";
import Footer from "../../Components/Footer";
// import CursoCss from '../../Components/CursoCss';

const HomePage = () => {
  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
      {/* <CursoCss/> */}
    </div>
  );
};
export default HomePage;
