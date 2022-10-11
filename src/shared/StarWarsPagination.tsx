import { LoadingButton } from '@mui/lab';
import { Stack, Typography } from '@mui/material';
import { useState } from 'react';

interface StarWarsPaginationProps {
  onNext: () => void;
  onPrev: () => void;
  disabledNext: boolean;
  disabledPrev: boolean;
  loading: boolean;
  page: number;
  count: number;
}

export const StarWarsPagination: React.FC<StarWarsPaginationProps> = ({
  disabledNext,
  disabledPrev,
  loading,
  onNext,
  onPrev,
  page,
  count,
}) => {
  const [paginated, setPaginated] = useState<'next' | 'prev' | null>(null);

  return (
    <Stack direction="row" gap={2} alignItems="center">
      <LoadingButton
        onClick={() => {
          onPrev();
          setPaginated('prev');
        }}
        disabled={disabledPrev}
        loading={loading && paginated === 'prev'}
      >
        Prev
      </LoadingButton>
      <LoadingButton
        onClick={() => {
          onNext();
          setPaginated('next');
        }}
        disabled={disabledNext}
        loading={loading && paginated === 'next'}
      >
        Next
      </LoadingButton>
      <Typography>Page: {!loading ? page : 'Fetching...'}</Typography>
      <Typography>Count: {count}</Typography>
    </Stack>
  );
};
