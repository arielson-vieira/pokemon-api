import React, { useEffect, useState } from "react";
import "./index.css";

import api from "../../Services/Api/api";
import Card from "../../Components/Card";
import Header from "../../Components/Header";

const AllPokemons = () => {
  const [pokemons, setPokemons] = useState({
    count: 0,
    next: null,
    previous: null,
    results: [],
  });

  useEffect(() => {
    getAll("pokemon/");
  }, []);

  function getAll(url) {
    api
      .get(url)
      .then((response) => {
        const pokemonsList = response.data.results.map(async (pokemon) => {
          return await getPokemon(pokemon.url);
        });
        Promise.all(pokemonsList).then((result) => {
          setPokemons({
            count: response.data.count,
            next: response.data.next,
            previous: response.data.previous,
            results: result,
          });
        });
      })
      .catch((err) => {
        console.error("Ocorreu um erro" + err);
      });
  }

  async function getPokemon(url) {
    return api.get(url).then((response) => {
      return response.data;
    });
  }
  return (
    // <div className="componenteHome">
    <div className="home">
      <Header />
      <div className="cardsPokedex">
        {pokemons?.results.map((pokemon, key) => {
          return (
            // <div className="cardHome" key={key}>
            <div className="cardHome" key={key}>
              <Card
                nameCard={pokemon.name}
                imageCard={
                  pokemon.sprites.other.dream_world.front_default ||
                  pokemon.sprites.front_default
                }
                powerCard={pokemon.base_experience}
                idCard={pokemon.id}
                heightCard={pokemon.height}
                weightCard={pokemon.weight}
              />
            </div>
          );
        })}
      </div>
      <div className="buttonNextAndPrevious">
        <button
          disabled={!pokemons.previous}
          onClick={() => getAll(pokemons.previous)}
        >
          Voltar
        </button>
        <button disabled={!pokemons.next} onClick={() => getAll(pokemons.next)}>
          Avançar
        </button>
      </div>
    </div>
  );
};
export default AllPokemons;
