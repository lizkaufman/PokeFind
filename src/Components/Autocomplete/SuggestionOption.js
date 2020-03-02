import React from 'react';
import css from './Autocomplete.module.css';

function SuggestionOption({ pokemon, handleSelect }) {
  return (
    <div onClick={() => handleSelect(pokemon.name)}>
      <img src={pokemon.img_url} alt="suggested pokemon" />
      <p>{pokemon.id}</p>
      <p>{pokemon.name}</p>
    </div>
  );
}

export default SuggestionOption;
