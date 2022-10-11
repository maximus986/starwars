import { Typography } from '@mui/material';

interface StarWarsCardItemProps {
  children: React.ReactNode;
}

export const StarWarsCardItem: React.FC<StarWarsCardItemProps> = ({
  children,
}) => {
  return (
    <Typography sx={{ textTransform: 'capitalize' }}>{children}</Typography>
  );
};
