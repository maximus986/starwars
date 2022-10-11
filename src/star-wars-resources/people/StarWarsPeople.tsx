import { useState } from 'react';
import { useGetStarWarPeopleQuery } from '../../api';
import {
  NoData,
  StarWarsGridContainer,
  StarWarsGridItem,
  StarWarsPage,
  StarWarsPageTitle,
} from '../../shared';
import { StarWarsPerson } from './StarWarsPerson';
import { StarWarsPagination } from '../../shared/StarWarsPagination';

export const StarWarsPeople = () => {
  const [page, setPage] = useState(1);
  const { data, isFetching } = useGetStarWarPeopleQuery({
    pageNumber: page,
  });

  const count = data?.count ?? 0;

  const handlePrev = () => {
    setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  if (data?.people.length === 0) {
    return <NoData />;
  }

  return (
    <StarWarsPage>
      <StarWarsPagination
        onNext={handleNext}
        onPrev={handlePrev}
        disabledNext={!data?.next || isFetching}
        disabledPrev={!data?.previous || isFetching}
        loading={isFetching}
        count={count}
        page={page}
      />
      <StarWarsPageTitle>People</StarWarsPageTitle>
      <StarWarsGridContainer>
        {data?.people.map(({ name, hairColor, mass, height }) => {
          return (
            <StarWarsGridItem key={name}>
              <StarWarsPerson
                name={name}
                hairColor={hairColor}
                mass={mass}
                height={height}
              />
            </StarWarsGridItem>
          );
        })}
      </StarWarsGridContainer>
    </StarWarsPage>
  );
};
