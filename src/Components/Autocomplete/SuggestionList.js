import React from 'react';
import SuggestionOption from './SuggestionOption';
import css from './Autocomplete.module.css';

function SuggestionList({ suggestionList, handleSelect }) {
  return (
    <ul>
      {suggestionList.map(item => (
        <li className={css.option}>
          <SuggestionOption pokemon={item} handleSelect={handleSelect} />
        </li>
      ))}
    </ul>
  );
}

export default SuggestionList;
