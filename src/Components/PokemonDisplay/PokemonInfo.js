import React from 'react';
import css from './PokemonDisplay.module.css';

function PokemonInfo({ foundPoke, resetPage }) {
  return (
    <div>
      <p>ID: {foundPoke.pkdx_id}</p>
      <p>Name: {foundPoke.name}</p>
      <p>Description: {foundPoke.description}</p>
      <p>
        Type:
        {foundPoke.types}
      </p>
      <button onClick={resetPage}>Search again?</button>
    </div>
  );
}

export default PokemonInfo;
