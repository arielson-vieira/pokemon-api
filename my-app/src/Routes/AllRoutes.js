import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Register from "../Pages/Register";
import AllPokemons from "../Pages/AllPokemons/Index";
import Connect from "../Pages/Connect"

const AllRoutes = () => (
  <Router>
    {/* <Home/> */}
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/registro" element={<Register />} />
      <Route exact path="/pokemons" element={<AllPokemons />} />
      <Route exact path="/conectar" element={<Connect />} />
    </Routes>
  </Router>
);

export default AllRoutes;
