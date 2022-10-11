import {
  StarWarsCard,
  StarWarsCardItem,
  StarWarsCardSubtitle,
} from '../../shared';

interface StarWarsPlanetProps {
  name: string;
  climate: string;
  population: string;
  terrain: string;
}
export const StarWarsPlanet: React.FC<StarWarsPlanetProps> = ({
  climate,
  population,
  terrain,
  name,
}) => {
  return (
    <StarWarsCard cardTitle={name}>
      <StarWarsCardSubtitle>Climate</StarWarsCardSubtitle>
      <StarWarsCardItem>{climate}</StarWarsCardItem>
      <StarWarsCardSubtitle>Population</StarWarsCardSubtitle>
      <StarWarsCardItem>{population}</StarWarsCardItem>
      <StarWarsCardSubtitle>Terrain</StarWarsCardSubtitle>
      <StarWarsCardItem>{terrain}</StarWarsCardItem>
    </StarWarsCard>
  );
};
