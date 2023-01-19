import React, { useEffect, useState } from "react";
import "./index.css";

import api from "../../Services/Api/api";
import Card from "../../Components/Card";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const AllPokemons = () => {
  const [pokemons, setPokemons] = useState({
    count: 0,
    next: null,
    previous: null,
    results: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAll("pokemon/");
  },[]);

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
        setLoading(false);
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
    <div className="cardPokemon">
      <Header />
      <div className="allCardPokedex">
        {loading && (
          <div className="loadPage">
            <div className="loadFake" />
            <div className="loadFake" />
            <div className="loadFake" />
            <div className="loadFake" />
            <div className="loadFake" />
            <div className="loadFake" />
            <div className="loadFake" />
            <div className="loadFake" />
          </div>
        )}

        <div className="cardsPokedex">
          {pokemons?.results.map((pokemon, key) => {
            return (
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
                  typeCard={
                    pokemon.types[1]?.type?.name || pokemon.types[0]?.type?.name
                  }
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
            ←
          </button>
          <button
            disabled={!pokemons.next}
            onClick={() => getAll(pokemons.next)}
          >
            →
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default AllPokemons;
