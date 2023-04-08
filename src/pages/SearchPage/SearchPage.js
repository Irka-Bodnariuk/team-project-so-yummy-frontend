import Search from 'components/Search/Search';
import React from 'react';
import GoToTop from 'helpers/scrollToTop';

export const SearchPage = () => {
  return (
    <>
      <Search />
      <GoToTop />
    </>
  );
};
