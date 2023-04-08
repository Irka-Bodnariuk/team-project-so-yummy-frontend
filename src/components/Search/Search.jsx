import SearchStyled from './SearchStyled';
import { useState } from 'react';

const Search = () => {
  const [search, setSearch] = useState('');

  const handleNameChange = event => setSearch(event.target.value);

  return (
    <SearchStyled>
      <input
        type="text"
        placeholder="Beef"
        value={search}
        onChange={handleNameChange}
      />
      <button>Search</button>
    </SearchStyled>
  );
};

export default Search;
