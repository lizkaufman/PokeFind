import React from 'react';

function SearchInput({ handleChange, searchTerm }) {
  return (
    <input
      onChange={handleChange}
      placeholder="Pokemon name"
      value={searchTerm}
    ></input>
  );
}

export default SearchInput;
