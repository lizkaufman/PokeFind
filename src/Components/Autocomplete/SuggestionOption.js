import React from 'react';

function SuggestionOption({ pokemon, updateResult }) {
  return (
    <div onClick={updateResult}>
      <img src={pokemon.img_url} alt="suggested pokemon" />
      <p>{pokemon.id}</p>
      <p>{pokemon.name}</p>
    </div>
  );
}

export default SuggestionOption;
