import React from "react";

import "./index.css";
const ImputsAndButtons =()=>{
const handleSubmit = (e) => {
    const formData = new formData(e.target);
    const data = Object.fromEntries(formData);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="email" placeholder="email" />
      <button type="submit">Enviar</button>
    </form>
  );
}}
export default ImputsAndButtons;
