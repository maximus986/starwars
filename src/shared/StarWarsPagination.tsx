import { LoadingButton } from '@mui/lab';
import { CircularProgress, Stack, Typography } from '@mui/material';
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
    <Stack direction="row" alignItems="center" gap={1} mb={2}>
      <Stack direction="row" alignItems="center">
        <LoadingButton
          onClick={() => {
            onPrev();
            setPaginated('prev');
          }}
          disabled={disabledPrev}
          loading={loading && paginated === 'prev'}
          size="small"
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
          size="small"
        >
          Next
        </LoadingButton>
      </Stack>
      <Stack direction="row" alignItems="center" gap={2}>
        <Typography>
          Page: {!loading ? page : <CircularProgress size={12} />}
        </Typography>
        <Typography>Count: {count}</Typography>
      </Stack>
    </Stack>
  );
};
