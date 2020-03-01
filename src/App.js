import React, { useState } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import Autocomplete from './Components/Autocomplete';
import PokemonDisplay from './Components/PokemonDisplay';

function App() {
  //State that manages the search term:
  const [searchTerm, setSearchTerm] = useState('');
  //State that manages the result of the search (the displayed pokemon):
  const [result, setResult] = useState([`sample result`]);

  //Function to update searchTerm:
  function handleChange(event) {
    setSearchTerm(event.target.value);
  }
  //Function to update result (will run when something in SuggestionList -OR- the search button is clicked):
  function updateResult() {
    //Needs to run setResult(searchTerm)
    setResult([]);
    console.log('result: ' + result);
  }

  return (
    <div className="App">
      <h1>Who's That Pokemon?</h1>
      <SearchBar
        handleChange={handleChange}
        searchTerm={searchTerm}
        updateResult={updateResult}
      />
      <Autocomplete searchTerm={searchTerm} updateResult={updateResult} />
      <PokemonDisplay updateResult={updateResult} result={result} />
    </div>
  );
}

export default App;
