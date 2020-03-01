import React from 'react';
import SuggestionOption from './SuggestionOption';

function SuggestionList({ suggestionList, updateResult }) {
  return (
    <ul>
      {suggestionList.map(item => (
        <li>
          <SuggestionOption pokemon={item} updateResult={updateResult} />
        </li>
      ))}
    </ul>
  );
}

export default SuggestionList;
