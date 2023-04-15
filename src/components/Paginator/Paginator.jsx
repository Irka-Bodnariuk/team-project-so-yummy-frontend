import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { StyledPaginator } from './Paginator.styled';

export const Paginator = ({ totalItems, setPage, page }) => {
  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  return (
    <StyledPaginator
      breakLabel="..."
      nextLabel={<FaChevronRight size={18} />}
      onPageChange={handlePageClick}
      pageRangeDisplayed={4}
      marginPagesDisplayed={4}
      pageCount={totalItems / 8}
      previousLabel={<FaChevronLeft size={18} />}
      renderOnZeroPageCount={null}
      pageClassName="pageBtn"
      previousClassName="arrowBtn"
      nextClassName="arrowBtn"
      pageLinkClassName="pageLink"
      previousLinkClassName="previousLink"
      nextLinkClassName="nextLink"
      forcePage={page - 1}
    />
  );
};
