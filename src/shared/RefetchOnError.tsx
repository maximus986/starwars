import { Box, SxProps, Theme, Typography } from '@mui/material';
import { RefetchButton } from './RefetchButton';

interface RefetchOnErrorProps {
  onRefetch: () => void;
  sx?: SxProps<Theme>;
}

export const RefetchOnError: React.FC<RefetchOnErrorProps> = ({
  onRefetch,
  sx,
}) => {
  return (
    <Box textAlign="center" sx={{ mt: 24, ...sx }}>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Something went wrong. Please try again.
      </Typography>
      <RefetchButton onRefetch={onRefetch} />
    </Box>
  );
};
