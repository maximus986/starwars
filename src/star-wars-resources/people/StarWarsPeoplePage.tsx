import { useGetStarWarPeopleQuery } from '../../api';
import { RefetchOnError, StarWarsSkeleton } from '../../shared';
import { StarWarsPeople } from './StarWarsPeople';

export const StarWarsPeoplePage = () => {
  const { isError, isLoading, isSuccess, refetch } = useGetStarWarPeopleQuery({
    pageNumber: 1,
  });
  return (
    <>
      {isLoading ? <StarWarsSkeleton /> : null}
      {isError ? <RefetchOnError onRefetch={refetch} /> : null}
      {isSuccess ? <StarWarsPeople /> : null}
    </>
  );
};
