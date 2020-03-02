import React from 'react';
import PokemonImage from './PokemonImage';
import PokemonInfo from './PokemonInfo';
import css from './PokemonDisplay.module.css';

function PokemonDisplay({ searchPressed, result, resetPage }) {
  if (searchPressed) {
    return (
      <div id={css.resultsBox}>
        <PokemonImage foundPoke={result[0]} />
        <PokemonInfo foundPoke={result[0]} resetPage={resetPage} />
      </div>
    );
  }
  return null;
}

export default PokemonDisplay;
