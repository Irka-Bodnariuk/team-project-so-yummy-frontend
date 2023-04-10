import CustomSelect from './CustomSelect';
import { Search, SearchForm, Text } from './SearchByType.styled';

const SearchByType = () => {
  return (
    <Search>
      <SearchForm>
        <Text>Search by:</Text>
        <CustomSelect />
      </SearchForm>
    </Search>
  );
};

export default SearchByType;
