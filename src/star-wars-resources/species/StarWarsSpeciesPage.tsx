import { useGetStarWarSpeciesQuery } from '../../api';
import { RefetchOnError, StarWarsSkeleton } from '../../shared';
import { StarWarsSpecies } from './StarWarsSpecies';

export const StarWarsSpeciesPage = () => {
  const { isError, isLoading, isSuccess, refetch } = useGetStarWarSpeciesQuery({
    pageNumber: 1,
  });
  return (
    <>
      {isLoading ? <StarWarsSkeleton /> : null}
      {isError ? <RefetchOnError onRefetch={refetch} /> : null}
      {isSuccess ? <StarWarsSpecies /> : null}
    </>
  );
};
