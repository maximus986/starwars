import { Typography } from '@mui/material';

interface StarWarsCardSubtitleProps {
  children: React.ReactNode;
}

export const StarWarsCardSubtitle: React.FC<StarWarsCardSubtitleProps> = ({
  children,
}) => {
  return <Typography variant="h6">{children}</Typography>;
};
