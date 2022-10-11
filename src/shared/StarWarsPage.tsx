import { Box } from '@mui/material';

interface StarWarsPageProps {
  children: React.ReactNode;
}

export const StarWarsPage: React.FC<StarWarsPageProps> = ({ children }) => {
  return <Box mt={3}>{children}</Box>;
};
