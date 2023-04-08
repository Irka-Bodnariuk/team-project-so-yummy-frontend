import * as React from 'react';

import Stack from '@mui/material/Stack';
import { PaginationWrapper, PaginBox } from './Pagination.styled';

export default function BasicPagination({ count, page, isChange }) {
  return (
    <PaginationWrapper>
      <Stack spacing={2}>
        <PaginBox count={count} page={page} onChange={isChange} />
      </Stack>
    </PaginationWrapper>
  );
}
