import { Typography } from '@mui/material';
import { StarWarsCard, StarWarsCardSubtitle } from '../../shared';

interface StarWarsPersonProps {
  name: string;
  height: string;
  mass: string;
  hairColor: string;
}

export const StarWarsPerson: React.FC<StarWarsPersonProps> = ({
  hairColor,
  height,
  mass,
  name,
}) => {
  return (
    <StarWarsCard cardTitle={name}>
      <StarWarsCardSubtitle>Height</StarWarsCardSubtitle>
      <Typography>{height}</Typography>
      <StarWarsCardSubtitle>Mass</StarWarsCardSubtitle>
      <Typography>{mass}</Typography>
      <StarWarsCardSubtitle>Hair color</StarWarsCardSubtitle>
      <Typography>{hairColor}</Typography>
    </StarWarsCard>
  );
};
