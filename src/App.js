import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import Autocomplete from './Components/Autocomplete';
import PokemonDisplay from './Components/PokemonDisplay';

function App() {
  //State that manages the search term:
  const [searchTerm, setSearchTerm] = useState('');
  //State that manages the result of the search (the displayed pokemon):
  const [result, setResult] = useState(['']);

  const [searchPressed, setSearchPressed] = useState(false);

  //Function to update searchTerm via text input:
  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  //Function to update search term via clicking on object:
  function handleSelect(option) {
    setSearchTerm(option);
  }

  function displayResult() {
    setSearchPressed(!searchPressed);
    console.log(result);
  }

  function resetPage() {
    setSearchPressed(!searchPressed);
    setSearchTerm('');
  }

  useEffect(() => {
    fetch(`http://localhost:5000/pokemon?search=${searchTerm}`)
      .then(res => res.json())
      .then(data => setResult(data));
  }, [searchTerm]);

  return (
    <div className="App">
      <h1>Who's That Pokemon?</h1>
      <SearchBar
        handleChange={handleChange}
        searchTerm={searchTerm}
        displayResult={displayResult}
        resetPage={resetPage}
      />
      <Autocomplete searchTerm={searchTerm} handleSelect={handleSelect} />
      <PokemonDisplay
        searchPressed={searchPressed}
        result={result}
        resetPage={resetPage}
      />
    </div>
  );
}

export default App;
