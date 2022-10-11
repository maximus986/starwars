import { useGetStarWarFilmsQuery } from '../../api';
import {
  NoData,
  StarWarsGridContainer,
  StarWarsGridItem,
  StarWarsPage,
  StarWarsPageTitle,
} from '../../shared';
import { StarWarsFilm } from './StarWarsFilm';

export const StarWarsFilms = () => {
  const { data } = useGetStarWarFilmsQuery();

  if (data?.films.length === 0) {
    return <NoData />;
  }

  return (
    <StarWarsPage>
      <StarWarsPageTitle>Films</StarWarsPageTitle>
      <StarWarsGridContainer>
        {data?.films.map(({ director, producer, releaseDate, title }) => {
          return (
            <StarWarsGridItem key={title}>
              <StarWarsFilm
                director={director}
                producer={producer}
                releaseDate={releaseDate}
                title={title}
              />
            </StarWarsGridItem>
          );
        })}
      </StarWarsGridContainer>
    </StarWarsPage>
  );
};
