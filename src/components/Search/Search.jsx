import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { toast } from 'react-toastify';
import {
  selectSearchQuery,
  selectSearchResult,
  selectSearchType,
} from 'store/search/searchSelectors';
import {
  clearSearch,
  updateSearchQuery,
  updateSearchResult,
  updateSearchType,
} from 'store/search/searchSlice';
import BGDots from 'reusableComponents/BGDots/BGDots';
import RecipeCard from 'reusableComponents/RecipeCard/RecipeCard';
import SearchInput from 'reusableComponents/SearchInput/SearchInput';
import Title from 'reusableComponents/Title/Title';
import {
  getSearchByIngredients,
  getSearchByTitle,
} from 'store/search/searchOperations';
import {
  Container,
  SearchForm,
  SearchList,
  SearchItem,
  NoRecipesImg,
  NoRecipesText,
  // PaginationWrapper,
} from './Search.styled';
import SearchTypeSelector from './SearchTypeSelector/SearchTypeSelector';
import noRecipesImgmob from 'images/bg/bgSearch/bg_search_mob@1x.png';

const Search = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const searchQuery = useSelector(selectSearchQuery);
  const searchType = useSelector(selectSearchType);
  const searchResult = useSelector(selectSearchResult);
  // const [count, setCount] = useState(1);
  const [page, setPage] = useState(1);
  const [isSearchResult, setIsSearchResult] = useState(false);

  // const onPageChange = (e, page) => {
  //   setPage(page);
  // };

  useEffect(() => {
    return () => {
      dispatch(clearSearch());
    };
  }, [dispatch]);

  useEffect(() => {
    if (location?.state?.ingredient) {
      dispatch(updateSearchType('ingredient'));
      location.state.ingredient = false;
    }
    if (searchType === 'title') {
      if (searchQuery) {
        getSearchByTitle(searchQuery, page)
          .then(res => {
            if (res.recipes.length === 0) {
              toast.warning('Nothing... Try another search query');
            }
            dispatch(updateSearchResult(res.recipes));
            // const totalPages = Math.ceil(res.total / res.limit);
            // setCount(totalPages);
            setIsSearchResult(true);
          })
          .catch(err => {
            toast.warning('Bad query', {
              position: toast.POSITION.TOP_RIGHT,
            });
          });
      }
    } else {
      if (searchQuery) {
        getSearchByIngredients(searchQuery, page)
          .then(res => {
            if (res.recipes.length === 0) {
              toast.warning(' Nothing... Try another search query');
            }
            dispatch(updateSearchResult(res.recipes));
            // const totalPages = Math.ceil(res.total / res.limit);
            // setCount(totalPages);
            setIsSearchResult(true);
          })
          .catch(err => toast.warning('Bad query'));
      }
    }
  }, [
    dispatch,
    location,
    location.state?.ingredient,
    page,
    searchQuery,
    searchType,
  ]);

  const onFormSubmit = e => {
    e.preventDefault();
    const newSearchQuery = e.target.elements.search.value;
    setPage(1);
    if (
      !newSearchQuery ||
      (newSearchQuery === searchQuery && searchResult.length === 0)
    ) {
      toast.warning('Type new query');
      return;
    }
    dispatch(updateSearchQuery(newSearchQuery));
  };
  return (
    <Container>
      <BGDots />
      <Title text={'Search'} />
      <SearchForm onSubmit={onFormSubmit}>
        <SearchInput name="search" searchQuery={searchQuery} />
        <SearchTypeSelector />
      </SearchForm>
      {searchResult.length === 0 && (
        <div>
          <NoRecipesImg src={noRecipesImgmob} alt="no recipe" />
          {!isSearchResult && (
            <NoRecipesText>Try looking for something else..</NoRecipesText>
          )}
          {/* {isSearchResult && (
            <NoRecipesText>Try looking for something else..</NoRecipesText>
          )} */}
        </div>
      )}
      {searchResult.length !== 0 && (
        <>
          <SearchList>
            {searchResult.map(
              ({ _id, preview, title, favorite, like, popularity }) => (
                <SearchItem key={_id}>
                  <RecipeCard
                    image={preview}
                    altText={title}
                    text={title}
                    id={_id}
                    favorite={favorite}
                    like={like}
                    popularity={popularity}
                  />
                </SearchItem>
              )
            )}
          </SearchList>
          {/* <PaginationWrapper>
            {count > 1 && (
              <BasicPagination
                count={count}
                page={page}
                isChange={onPageChange}
              />
            )}
          </PaginationWrapper> */}
        </>
      )}
    </Container>
  );
};

export default Search;
