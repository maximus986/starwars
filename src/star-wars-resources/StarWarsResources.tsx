import { Box, Stack, Toolbar, Typography } from '@mui/material';
import { intersection } from 'lodash';
import { useMemo } from 'react';
import { useGetStarWarResourcesQuery } from '../api';
import { FilterResource } from './FilterResource';
import { SearchResources } from './SearchResources';
import { StarWarsResource } from './StarWarsResource';
import {
  NoData,
  StarWarsGridContainer,
  StarWarsGridItem,
  StarWarsPage,
  StarWarsPageTitle,
} from '../shared';
import { useFilterResources } from './useFilterResources';
import { useSearchResources } from './useSearchResources';

export const StarWarsResources = () => {
  const { data } = useGetStarWarResourcesQuery();

  const {
    handleFilterResources,
    handleFilterReset,
    filteredStarWarsResources,
  } = useFilterResources(data ?? []);

  const {
    handleSearchResources,
    handleSearchReset,
    searchedStarWarsResources,
  } = useSearchResources(data ?? []);

  const starWarsResources = useMemo(
    () =>
      intersection(
        filteredStarWarsResources,
        searchedStarWarsResources,
        data ?? []
      ),
    [data, filteredStarWarsResources, searchedStarWarsResources]
  );

  if (data?.length === 0) {
    return <NoData />;
  }

  return (
    <StarWarsPage>
      <Toolbar>
        <Stack
          direction={['column', 'row']}
          gap={3}
          justifyContent={['flex-start', 'space-between']}
          alignItems="center"
          flex={1}
        >
          <SearchResources
            onSearchResources={(searchQuery) => {
              handleSearchResources(searchQuery);
            }}
            onClearSearch={() => {
              handleSearchReset();
            }}
          />
          <FilterResource
            onFilter={(filter) => {
              handleFilterResources(filter);
            }}
            onFilterReset={() => {
              handleFilterReset();
            }}
          />
        </Stack>
      </Toolbar>
      <Box mt={4}>
        <StarWarsPageTitle>Star Wars Resources</StarWarsPageTitle>
        <StarWarsGridContainer>
          {starWarsResources.map((resource) => {
            return (
              <StarWarsGridItem key={resource}>
                <StarWarsResource resource={resource} />
              </StarWarsGridItem>
            );
          })}
        </StarWarsGridContainer>
      </Box>
      {starWarsResources.length === 0 ? (
        <Typography>No search results</Typography>
      ) : null}
    </StarWarsPage>
  );
};
