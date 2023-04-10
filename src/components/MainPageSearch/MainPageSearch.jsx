import MainPageSearchStyled from './MainPageSearchStyled';
import { useState } from 'react';

const MainPageSearch = () => {
  const [search, setSearch] = useState('');

  const handleNameChange = event => setSearch(event.target.value);

  return (
    <MainPageSearchStyled>
      <input
        type="text"
        placeholder="Beef"
        value={search}
        onChange={handleNameChange}
      />
      <button>Search</button>
    </MainPageSearchStyled>
  );
};

export default MainPageSearch;
