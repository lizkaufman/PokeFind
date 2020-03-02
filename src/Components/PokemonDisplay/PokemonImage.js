import React from 'react';
import css from './PokemonDisplay.module.css';

function PokemonImage({ foundPoke }) {
  return <img alt="searched pokemon" src={foundPoke.img_url} />;
}

export default PokemonImage;
