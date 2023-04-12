import MainPageSearchStyled from './MainPageSearchStyled';
import { Button } from 'components/Button/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPageSearch = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleNameChange = event => setSearch(event.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (search.trim() === '') {
      alert('Please, enter a valid search request');
      setSearch('');
      return;
    }
    navigate(`/search/?search=${search}`, { replace: true });
    setSearch('');
  };

  return (
    <MainPageSearchStyled onSubmit={onSubmit}>
      <input
        type="search"
        placeholder="Beef"
        value={search}
        onChange={handleNameChange}
      />

      <Button
        type="submit"
        // onClick={onSubmit}
        look="rounded"
        width="113px"
        heigth="52px"
        widthTablet="161px"
        heigthTablet="59px"
        heigthDesktop="70px"
        widthDesktop="161px"
        fontSize="14px"
        fontSizeTablet="16px"
        fontSizeDesktop="16px"
        lineHeight="21px"
        lineHeightTablet="24px"
        lineHeightDesktop="24px"
      >
        Search
      </Button>
    </MainPageSearchStyled>
  );
};

export default MainPageSearch;
