import { useState } from 'react';
import { useGetStarWarVehiclesQuery } from '../../api';
import {
  NoData,
  StarWarsGridContainer,
  StarWarsGridItem,
  StarWarsPage,
  StarWarsPageTitle,
  StarWarsPagination,
} from '../../shared';
import { StarWarsVehicle } from './StarWarsVehicle';

export const StarWarsVehicles = () => {
  const [page, setPage] = useState(1);
  const { data, isFetching } = useGetStarWarVehiclesQuery({
    pageNumber: page,
  });

  const count = data?.count ?? 0;

  const handlePrev = () => {
    setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  if (data?.vehicles.length === 0) {
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
      <StarWarsPageTitle>Vehicles</StarWarsPageTitle>
      <StarWarsGridContainer>
        {data?.vehicles.map(({ name, manufacturer, model, passengers }) => {
          return (
            <StarWarsGridItem key={name}>
              <StarWarsVehicle
                name={name}
                manufacturer={manufacturer}
                model={model}
                passengers={passengers}
              />
            </StarWarsGridItem>
          );
        })}
      </StarWarsGridContainer>
    </StarWarsPage>
  );
};
