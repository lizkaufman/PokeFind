import React from 'react';
import SearchButton from './SearchButton';
import SearchInput from './SearchInput';

function SearchBar({ displayResult, handleChange, searchTerm }) {
  return (
    <div>
      <SearchInput handleChange={handleChange} searchTerm={searchTerm} />
      <SearchButton displayResult={displayResult} />
    </div>
  );
}

export default SearchBar;
