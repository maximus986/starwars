import { useGetStarWarFilmsQuery } from '../../api';
import { RefetchOnError, StarWarsSkeleton } from '../../shared';
import { StarWarsFilms } from './StarWarsFilms';

export const StarWarsFilmsPage = () => {
  const { isError, isLoading, isSuccess, refetch } = useGetStarWarFilmsQuery();
  return (
    <>
      {isLoading ? <StarWarsSkeleton items={6} /> : null}
      {isError ? <RefetchOnError onRefetch={refetch} /> : null}
      {isSuccess ? <StarWarsFilms /> : null}
    </>
  );
};
