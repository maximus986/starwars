import { useGetStarWarResourcesQuery } from '../api';
import { RefetchOnError } from '../shared';
import { StarWarsResources } from './StarWarsResources';
import { StarWarsResourcesSkeleton } from './StarWarsResourcesSkeleton';

export const StarWarsResourcesPage = () => {
  const { isError, isLoading, isSuccess, refetch } =
    useGetStarWarResourcesQuery();

  return (
    <>
      {isLoading ? <StarWarsResourcesSkeleton /> : null}
      {isError ? <RefetchOnError onRefetch={refetch} /> : null}
      {isSuccess ? <StarWarsResources /> : null}
    </>
  );
};
