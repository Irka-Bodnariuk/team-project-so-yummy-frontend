import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { updateSearchType } from 'store/search/searchSlice';
const options = [
  { value: 'title', label: 'Title' },
  { value: 'ingredient', label: 'Ingredient' },
];
const portal = document.querySelector('#modalPortal');
const CustomSelect = () => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const theme = useSelector(state => state.theme.darkMode);

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
    dispatch(updateSearchType(selectedOption.value));
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
      placeholder="Select options"
      menuPosition="absolute"
      menuPortalTarget={portal}
      // Custom styling for the Select component
      styles={{
        dropdownIndicator: () => ({
          color: '#8BAA36',
          marginRight: '15px',
        }),
        ValueContainer: () => ({
          color: '#8BAA36',
        }),
        control: (provided, state) => ({
          ...provided,
          color: '#rgba(0, 0, 0, 0.5)',
          border: theme ? '1px solid #FAFAFA ' : '#D9D9D9',
          borderRadius: '6px',
          backgroundColor: theme ? 'transparent' : '#D9D9D9',
          opacity: '0.5',
          borderStyle: 'none',
          outline: 'none',
          borderColor: state.isFocused ? 'none' : provided.borderColor,
          boxShadow: state.isFocused ? 'none' : provided.boxShadow,
          width: '146px',
          height: '34px',
          '@media (min-width: 768px)': {
            width: '175px',
            height: '41px',
          },
          '@media (min-width: 1440px)': {
            width: '198px',
            height: '49px',
          },
        }),
        indicatorSeparator: () => ({
          display: 'none',
        }),
        input: (provided, state) => ({
          ...provided,
          marginBottom: '0',
          color: '#000000',
          font: '14',
          lineHeight: '1.5',
        }),
        menu: () => ({
          border: 'none',
        }),
        menuList: (provided, state) => ({
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '8px',

          marginBottom: '10px',
          paddingBottom: '5px',
          font: '12px',
          lineHeight: '18px',
          color: '#rgba(0, 0, 0, 0.5)',
          backgroundColor: theme ? '#8BAA36' : '#FAFAFA',
          borderRadius: '6px',
          border: state.isFocused ? 'none' : provided.borderColor, // add this property to remove border
          outline: 'none',
          borderStyle: 'none',
          borderColor: 'none',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#ffffff', // remove the hover background color
            borderStyle: 'none',
            borderColor: 'none',
            boxShadow: 'none',
            border: 'none',
            outline: 'none',
          },
          '&:focus': {
            backgroundColor: '#ffffff', // remove the focus background color
            borderStyle: 'none',
            borderColor: 'none',
            boxShadow: 'none',
            border: 'none',
            outline: 'none',
          },

          width: '146px',

          '@media (min-width: 768px)': {
            width: '175px',

            font: '14px',
            lineHeight: '21px',
          },
          '@media (min-width: 1440px)': {
            width: '198px',
          },
        }),
        option: (provided, state) => ({
          border: 'none',
          paddingLeft: '14px',
          color: '#000000',
          opacity: '0.5',
          padding: '8px',
          cursor: 'pointer',

          '&:hover': {
            color: '#8baa36',
            opacity: '0.75',
            backgroundColor: '#f2ecec', // remove the hover background color
          },
          '&:focus': {
            backgroundColor: 'transparent', // remove the focus background color
          },
        }),
      }}
    />
  );
};

export default CustomSelect;
