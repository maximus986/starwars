import {
  StarWarsCard,
  StarWarsCardItem,
  StarWarsCardSubtitle,
} from '../../shared';

interface StarWarsFilmProps {
  director: string;
  producer: string;
  releaseDate: string;
  title: string;
}

export const StarWarsFilm: React.FC<StarWarsFilmProps> = ({
  director,
  producer,
  releaseDate,
  title,
}) => {
  return (
    <StarWarsCard cardTitle={title}>
      <StarWarsCardSubtitle>Director</StarWarsCardSubtitle>
      <StarWarsCardItem>{director}</StarWarsCardItem>
      <StarWarsCardSubtitle>Producer</StarWarsCardSubtitle>
      <StarWarsCardItem>{producer}</StarWarsCardItem>
      <StarWarsCardSubtitle>Release Date</StarWarsCardSubtitle>
      <StarWarsCardItem>{releaseDate}</StarWarsCardItem>
    </StarWarsCard>
  );
};
