import { useState } from 'react';
import { useGetStarWarSpeciesQuery } from '../../api';
import {
  NoData,
  StarWarsGridContainer,
  StarWarsGridItem,
  StarWarsPage,
  StarWarsPageTitle,
  StarWarsPagination,
} from '../../shared';
import { StarWarsSingleSpecies } from './StarWarsSingleSpecies';

export const StarWarsSpecies = () => {
  const [page, setPage] = useState(1);
  const { data, isFetching } = useGetStarWarSpeciesQuery({
    pageNumber: page,
  });

  const count = data?.count ?? 0;

  const handlePrev = () => {
    setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  if (data?.species.length === 0) {
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
      <StarWarsPageTitle>Species</StarWarsPageTitle>
      <StarWarsGridContainer>
        {data?.species.map(
          ({ classification, designation, language, name }) => {
            return (
              <StarWarsGridItem key={name}>
                <StarWarsSingleSpecies
                  name={name}
                  classification={classification}
                  designation={designation}
                  language={language}
                />
              </StarWarsGridItem>
            );
          }
        )}
      </StarWarsGridContainer>
    </StarWarsPage>
  );
};
