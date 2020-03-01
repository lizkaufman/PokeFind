import React from 'react';
import SearchButton from './SearchButton';
import SearchInput from './SearchInput';

function SearchBar({ updateResult, handleChange, searchTerm }) {
  return (
    <div>
      <SearchInput handleChange={handleChange} searchTerm={searchTerm} />
      <SearchButton updateResult={updateResult} />
    </div>
  );
}

export default SearchBar;
