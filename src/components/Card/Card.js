import React from "react";
import Types from "./Types";

const Card = ({ pokemon }) => {
  const meterHeight = pokemon.height / 10;
  const kgWeight = pokemon.weight / 10;
  return (
    <div className="card mx-3 sm:mx-2 p-8 bg-blue-50 border rounded shadow-lg">
      <div className="cardImg">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="mx-auto"
        />
      </div>
      <h3 className="cardName mb-3 text-2xl font-bold capitalize">
        {pokemon.name}
      </h3>
      <div className="cardTypes flex justify-center">
        <p className="font-bold">Type:</p>
        <Types types={pokemon.types} />
      </div>
      <div className="cardInfo">
        <div className="cardData">
          <p className="font-bold">Height: {meterHeight}m</p>
        </div>
        <div className="cardData">
          <p className="font-bold">Weight: {kgWeight}kg</p>
        </div>
        <div className="cardData">
          <p className="font-bold capitalize">
            Ability: {pokemon.abilities[0].ability.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
