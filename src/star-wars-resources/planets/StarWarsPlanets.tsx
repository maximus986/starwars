import { useState } from 'react';
import { useGetStarWarPlanetsQuery } from '../../api';
import {
  NoData,
  StarWarsGridContainer,
  StarWarsGridItem,
  StarWarsPage,
  StarWarsPageTitle,
  StarWarsPagination,
} from '../../shared';
import { StarWarsPlanet } from './StarWarsPlanet';

export const StarWarsPlanets = () => {
  const [page, setPage] = useState(1);
  const { data, isFetching } = useGetStarWarPlanetsQuery({
    pageNumber: page,
  });

  const count = data?.count ?? 0;

  const handlePrev = () => {
    setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  if (data?.planets.length === 0) {
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
      <StarWarsPageTitle>Planets</StarWarsPageTitle>
      <StarWarsGridContainer>
        {data?.planets.map(({ name, climate, population, terrain }) => {
          return (
            <StarWarsGridItem key={name}>
              <StarWarsPlanet
                name={name}
                climate={climate}
                population={population}
                terrain={terrain}
              />
            </StarWarsGridItem>
          );
        })}
      </StarWarsGridContainer>
    </StarWarsPage>
  );
};
