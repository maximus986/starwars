import { Box } from '@mui/material';

interface StarWarsResourcesGridItemProps {
  children: React.ReactNode;
}

export const StarWarsResourcesGridItem: React.FC<
  StarWarsResourcesGridItemProps
> = ({ children }) => {
  return (
    <Box gridColumn={['span 12', 'span 6', 'span 6', 'span 4']}>{children}</Box>
  );
};
