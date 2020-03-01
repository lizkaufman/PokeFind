import React from 'react';
import PokemonImage from './PokemonImage';
import PokemonInfo from './PokemonInfo';
import css from './PokemonDisplay.module.css';

function PokemonDisplay({ result, updateResult }) {
  return (
    <div id={css.resultsBox}>
      <h2>Search result:</h2>
      <PokemonImage updateResult={updateResult} result={result} />
      <PokemonInfo updateResult={updateResult} result={result} />
    </div>
  );
}

export default PokemonDisplay;
