import { useGetStarWarStarshipsQuery } from '../../api';
import { RefetchOnError, StarWarsSkeleton } from '../../shared';
import { StarWarsStarships } from './StarWarsStarhips';

export const StarWarsStarshipsPage = () => {
  const { isError, isLoading, isSuccess, refetch } =
    useGetStarWarStarshipsQuery({
      pageNumber: 1,
    });
  return (
    <>
      {isLoading ? <StarWarsSkeleton /> : null}
      {isError ? <RefetchOnError onRefetch={refetch} /> : null}
      {isSuccess ? <StarWarsStarships /> : null}
    </>
  );
};
