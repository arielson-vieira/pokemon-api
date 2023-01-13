import React from "react";

import "./index.css";
import iconPokemon from "../../Assets/Icon/iconPikachu.png";

const Footer = () => {
  return (
    <div className="footer">
      
      <div className="containerInfo">
        <div className="nameLeft">
          <a href="https://www.globo.com/">
            Pokemon Origins 
          </a>
          
        </div>
        <div className="iconFooter"><img src={iconPokemon} /></div>
        <div className="nameRight">
          <a href="https://www.globo.com/">Pokemons</a>
          <a href="https://www.globo.com/"> Origins</a>
          <a href="https://www.globo.com/"> Filmes</a>
          <a href="https://www.globo.com/"> Wallpappers</a>
          
        </div>
       
      </div>

      <div className="copyright">
        <p> © Copyright 2000 -{new Date().getFullYear()} Pokemon Origins</p>
        
      </div>

    </div>
  );
};
export default Footer;

// import React from "react";

// import "./index.css";
// import iconPokemon from "../../Assets/Icon/iconPikachu.png";

// const Footer = () => {
//   return (
//     <div className="footer">
//       <div className="icon">
//         <div className="caixaSuperior">
//           <div className="nomeEsquerda">
//             <a href="https://www.globo.com/">
//               Pokemon Origins
//               <img src={iconPokemon} />
//             </a>
//           </div>
//         </div>
//         <div className="nomeDireita">
//           <a href="https://www.globo.com/">Pokemons</a>
//           <a href="https://www.globo.com/"> Origins</a>
//           <a href="https://www.globo.com/"> Filmes</a>
//           <a href="https://www.globo.com/"> Wallpappers</a>
//         </div>
//       </div>

//       <div className="logoGlobo">
//         <img src={iconGlobo}alt='carregando ícone'></img>
//         <p> © Copyright 2000 -{new Date().getFullYear()} Pokemon Origins</p>
//       </div>
//     </div>
//   );
// };
// export default Footer;
