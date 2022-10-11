import { Typography } from '@mui/material';

interface StarWarsPageTitleProps {
  children: React.ReactNode;
}

export const StarWarsPageTitle: React.FC<StarWarsPageTitleProps> = ({
  children,
}) => {
  return (
    <Typography variant="h4" mb={6} textAlign="center">
      {children}
    </Typography>
  );
};
