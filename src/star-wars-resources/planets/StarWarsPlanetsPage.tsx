import { useGetStarWarPlanetsQuery } from '../../api';
import { RefetchOnError, StarWarsSkeleton } from '../../shared';
import { StarWarsPlanets } from './StarWarsPlanets';

export const StarWarsPlanetsPage = () => {
  const { isError, isLoading, isSuccess, refetch } = useGetStarWarPlanetsQuery({
    pageNumber: 1,
  });
  return (
    <>
      {isLoading ? <StarWarsSkeleton /> : null}
      {isError ? <RefetchOnError onRefetch={refetch} /> : null}
      {isSuccess ? <StarWarsPlanets /> : null}
    </>
  );
};
