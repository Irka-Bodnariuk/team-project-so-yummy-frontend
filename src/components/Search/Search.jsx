import { toast } from 'react-toastify';
import ReactPaginate from 'react-paginate';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { useMedia } from 'hooks';

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
import { Loader } from 'components/Loader/Loader';
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
  PaginationWrapper,
} from './Search.styled';
import SearchTypeSelector from './SearchTypeSelector/SearchTypeSelector';
import noRecipesImgmob from 'images/bg/bgSearch/bg_search_mob@1x.png';
import noRecipesImgtab from 'images/bg/bgSearch/bg_search_tablet@1x.png';
import noRecipesImgdes from 'images/bg/bgSearch/bg_search_desktop@1x.png';

const Search = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const searchQuery = useSelector(selectSearchQuery);
  const searchType = useSelector(selectSearchType);
  const searchResult = useSelector(selectSearchResult);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1);
  const [page, setPage] = useState(1);
  const [isSearchResult, setIsSearchResult] = useState(false);
  const { isMobileScreen, isTabletScreen, isDesktopScreen } = useMedia();

  const onPageChange = (e, page) => {
    setPage(page);
  };

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
      console.log(location);
      if (searchQuery) {
        setLoading(true);
        getSearchByTitle(searchQuery, page)
          .then(res => {
            if (res.recipes.length === 0) {
              toast.warning('Nothing... Try another search query');
              setLoading(false);
            }
            dispatch(updateSearchResult(res.recipes));
            const totalPages = Math.ceil(res.total / res.limit);
            setCount(totalPages);
            setIsSearchResult(true);
            setLoading(false);
          })
          .catch(err => {
            toast.warning('Bad query', {
              position: toast.POSITION.TOP_RIGHT,
            });
          });
      }
    } else {
      if (searchQuery) {
        setLoading(true);
        getSearchByIngredients(searchQuery, page)
          .then(res => {
            if (res.recipes.length === 0) {
              setLoading(false);
              toast.warning(' Nothing... Try another search query');
            }
            dispatch(updateSearchResult(res.recipes));
            const totalPages = Math.ceil(res.total / res.limit);
            setCount(totalPages);
            setIsSearchResult(true);
            setLoading(false);
          })
          .catch(err => {
            toast.warning('Bad query');
            setLoading(false);
          });
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
      {loading && <Loader />}
      {!loading && (
        <>
          <BGDots />
          <Title text={'Search'} />
          <SearchForm onSubmit={onFormSubmit}>
            <SearchInput name="search" searchQuery={searchQuery} />
            <SearchTypeSelector />
          </SearchForm>
          {searchResult.length === 0 && (
            <div>
              {isMobileScreen && (
                <NoRecipesImg src={noRecipesImgmob} alt="no recipe" />
              )}
              {isTabletScreen && (
                <NoRecipesImg src={noRecipesImgtab} alt="no recipe" />
              )}
              {isDesktopScreen && (
                <NoRecipesImg src={noRecipesImgdes} alt="no recipe" />
              )}

              {!isSearchResult && (
                <NoRecipesText>Try looking for something else..</NoRecipesText>
              )}
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
              <PaginationWrapper>
                {count > 1 && (
                  <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={onPageChange}
                    pageRangeDisplayed={page}
                    pageCount={count}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                  />
                )}
              </PaginationWrapper>
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default Search;
