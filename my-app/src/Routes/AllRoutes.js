import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Register from "../Pages/Register";
import AllPokemons from "../Pages/AllPokemons/Index";
import Connect from "../Pages/Connect"
import Page404 from "../Pages/Page404";

const AllRoutes = () => (
  <Router>
    {/* <Home/> */}
   
        <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/registro" element={<Register />} />
      <Route exact path="/pokemons" element={<AllPokemons />} />
      <Route exact path="/conectar" element={<Connect />} />
      <Route exact path="*" element={<Page404 />} />
    </Routes>
  </Router>
);

export default AllRoutes;
