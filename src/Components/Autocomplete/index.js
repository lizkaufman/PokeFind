import React, { useState, useEffect } from 'react';
import SuggestionList from './SuggestionList';
import css from './Autocomplete.module.css';

function Autocomplete({ searchTerm, handleSelect }) {
  //State that manages the list of suggestions as the input is typed:
  const [suggestionList, setSuggestionList] = useState([]);

  //useEffect that handles the fetch - first argument is the fetch, and the second is the state that it's dependent on, so [searchTerm]
  useEffect(() => {
    fetch(`http://localhost:5000/pokemon?search=${searchTerm}`)
      .then(res => res.json())
      .then(data => setSuggestionList(data));
  }, [searchTerm]);

  return (
    <SuggestionList
      suggestionList={suggestionList}
      handleSelect={handleSelect}
    />
  );
}

export default Autocomplete;
