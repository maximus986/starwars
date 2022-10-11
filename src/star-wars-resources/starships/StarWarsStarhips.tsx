import { useState } from 'react';
import { useGetStarWarStarshipsQuery } from '../../api';
import {
  NoData,
  StarWarsGridContainer,
  StarWarsGridItem,
  StarWarsPage,
  StarWarsPageTitle,
  StarWarsPagination,
} from '../../shared';
import { StarWarsStarship } from './StarWarsStarship';

export const StarWarsStarships = () => {
  const [page, setPage] = useState(1);
  const { data, isFetching } = useGetStarWarStarshipsQuery({
    pageNumber: page,
  });

  const count = data?.count ?? 0;

  const handlePrev = () => {
    setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  if (data?.starships.length === 0) {
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
      <StarWarsPageTitle>Starships</StarWarsPageTitle>
      <StarWarsGridContainer>
        {data?.starships.map(({ name, manufacturer, model, passengers }) => {
          return (
            <StarWarsGridItem key={name}>
              <StarWarsStarship
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
