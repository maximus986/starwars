import {
  StarWarsCard,
  StarWarsCardItem,
  StarWarsCardSubtitle,
} from '../../shared';

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
      <StarWarsCardItem>{height}</StarWarsCardItem>
      <StarWarsCardSubtitle>Mass</StarWarsCardSubtitle>
      <StarWarsCardItem>{mass}</StarWarsCardItem>
      <StarWarsCardSubtitle>Hair color</StarWarsCardSubtitle>
      <StarWarsCardItem>{hairColor}</StarWarsCardItem>
    </StarWarsCard>
  );
};
