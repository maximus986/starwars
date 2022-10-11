import React from 'react';
import { useGetStarWarPeopleQuery } from '../../api';
import { RefetchOnError } from '../../shared';
import { StarWarsPeople } from './StarWarsPeople';
import { StarWarsPeopleSkeleton } from './StarWarsPeopleSkeleton';

export const StarWarsPeoplePage = () => {
  const { isError, isLoading, isSuccess, refetch } = useGetStarWarPeopleQuery({
    pageNumber: 1,
  });
  return (
    <>
      {isLoading ? <StarWarsPeopleSkeleton /> : null}
      {isError ? <RefetchOnError onRefetch={refetch} /> : null}
      {isSuccess ? <StarWarsPeople /> : null}
    </>
  );
};
