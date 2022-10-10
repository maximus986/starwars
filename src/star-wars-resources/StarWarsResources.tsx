import { Box, Stack, Toolbar, Typography } from '@mui/material';
import { intersection } from 'lodash';
import { useMemo } from 'react';
import { useGetStarWarResourcesQuery } from '../api';
import { FilterResource } from './FilterResource';
import { SearchResources } from './SearchResources';
import { StarWarsResource } from './StarWarsResource';
import { StarWarsResourcesGridContainer } from './StarWarsResourcesGridContainer';
import { StarWarsResourcesGridItem } from './StarWarsResourcesGridItem';
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

  return (
    <>
      <Toolbar>
        <Stack
          direction={['column', 'row']}
          gap={3}
          justifyContent={['flex-start', 'space-between']}
          alignItems="center"
          flex={1}
          pt={3}
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
        <Typography variant="h4" mb={6} textAlign="center">
          Star Wars Resources
        </Typography>
        <StarWarsResourcesGridContainer>
          {starWarsResources.map((resource) => {
            return (
              <StarWarsResourcesGridItem key={resource}>
                <StarWarsResource resource={resource} />
              </StarWarsResourcesGridItem>
            );
          })}
        </StarWarsResourcesGridContainer>
      </Box>
      {starWarsResources.length === 0 ? (
        <Typography>No search results</Typography>
      ) : null}
    </>
  );
};
