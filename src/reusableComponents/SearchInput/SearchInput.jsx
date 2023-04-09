import { useState } from 'react';
import { toast } from 'react-toastify';
import { Button } from 'components/Button/Button';
import * as yup from 'yup';

import { Wrapper, Input, ButtonWrapper } from './SearchInput.styled';
const searchQueryRegex = /^[a-z A-Z\-&,]+$/;
const customId = 'customID';
const SearchInput = ({ dark, name, searchQuery }) => {
  const [inputValue, setInputValue] = useState(searchQuery);

  return (
    <Wrapper>
      <Input
        placeholder="Enter query"
        onChange={async e => {
          const searchQuerySchema = yup.string().matches(searchQueryRegex);

          try {
            if (e.target.value !== '') {
              const validInput = await searchQuerySchema.validate(
                e.target.value
              );
              setInputValue(validInput);
            } else {
              setInputValue('');
            }
          } catch (error) {
            toast.error('Only latin letters can be entered!', {
              toastId: customId,
            });
            return;
          }
        }}
        name={name}
        value={inputValue}
      ></Input>
      <ButtonWrapper>
        <Button
          type="submit"
          look="rounded"
          width="100%"
          heigth="45px"
          heigthTablet="59px"
          fontSize="16px"
          // look="search"
          // type="submit"
          // style={{ backgroundColor: '#8BAA36 ' }}
        >
          Search
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default SearchInput;
