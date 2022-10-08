import { Box } from '@mui/material';

interface StarWarsResourcesGridContainerProps {
  children: React.ReactNode;
}

export const StarWarsResourcesGridContainer: React.FC<
  StarWarsResourcesGridContainerProps
> = ({ children }) => {
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
