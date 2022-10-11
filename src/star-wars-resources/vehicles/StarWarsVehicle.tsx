import {
  StarWarsCard,
  StarWarsCardItem,
  StarWarsCardSubtitle,
} from '../../shared';

interface StarWarsVehicleProps {
  name: string;
  manufacturer: string;
  model: string;
  passengers: string;
}

export const StarWarsVehicle: React.FC<StarWarsVehicleProps> = ({
  manufacturer,
  model,
  passengers,
  name,
}) => {
  return (
    <StarWarsCard cardTitle={name}>
      <StarWarsCardSubtitle>Manufacturer</StarWarsCardSubtitle>
      <StarWarsCardItem>{manufacturer}</StarWarsCardItem>
      <StarWarsCardSubtitle>Model</StarWarsCardSubtitle>
      <StarWarsCardItem>{model}</StarWarsCardItem>
      <StarWarsCardSubtitle>Passengers</StarWarsCardSubtitle>
      <StarWarsCardItem>{passengers}</StarWarsCardItem>
    </StarWarsCard>
  );
};
