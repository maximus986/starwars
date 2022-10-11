import {
  StarWarsCard,
  StarWarsCardItem,
  StarWarsCardSubtitle,
} from '../../shared';

interface StarWarsSingleSpeciesProps {
  name: string;
  classification: string;
  designation: string;
  language: string;
}

export const StarWarsSingleSpecies: React.FC<StarWarsSingleSpeciesProps> = ({
  classification,
  designation,
  language,
  name,
}) => {
  return (
    <StarWarsCard cardTitle={name}>
      <StarWarsCardSubtitle>Classification</StarWarsCardSubtitle>
      <StarWarsCardItem>{classification}</StarWarsCardItem>
      <StarWarsCardSubtitle>Designation</StarWarsCardSubtitle>
      <StarWarsCardItem>{designation}</StarWarsCardItem>
      <StarWarsCardSubtitle>Language</StarWarsCardSubtitle>
      <StarWarsCardItem>{language}</StarWarsCardItem>
    </StarWarsCard>
  );
};
