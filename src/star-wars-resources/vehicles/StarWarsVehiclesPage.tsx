import { useGetStarWarVehiclesQuery } from '../../api';
import { RefetchOnError, StarWarsSkeleton } from '../../shared';
import { StarWarsVehicles } from './StarWarsVehicles';

export const StarWarsVehiclesPage = () => {
  const { isError, isLoading, isSuccess, refetch } = useGetStarWarVehiclesQuery(
    {
      pageNumber: 1,
    }
  );
  return (
    <>
      {isLoading ? <StarWarsSkeleton /> : null}
      {isError ? <RefetchOnError onRefetch={refetch} /> : null}
      {isSuccess ? <StarWarsVehicles /> : null}
    </>
  );
};
