import { Box } from '@mui/material';

interface StarWarsGridContainerProps {
  children: React.ReactNode;
}

export const StarWarsGridContainer: React.FC<StarWarsGridContainerProps> = ({
  children,
}) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gap={2}
      alignItems="stretch"
    >
      {children}
    </Box>
  );
};
