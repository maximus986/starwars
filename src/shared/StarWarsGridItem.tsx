import { Box } from '@mui/material';

interface StarWarsGridItemProps {
  children: React.ReactNode;
}

export const StarWarsGridItem: React.FC<StarWarsGridItemProps> = ({
  children,
}) => {
  return (
    <Box gridColumn={['span 12', 'span 6', 'span 6', 'span 4']}>{children}</Box>
  );
};
