import { Box, Toolbar, Typography, Container, Stack } from '@mui/material';
import { useCallback, useState } from 'react';
import { StarWarResourceType, useGetStarWarResourcesQuery } from '../api';
import { FilterResource } from './FilterResource';
import { StarWarsResource } from './StarWarsResource';
import { StarWarsResourcesGridContainer } from './StarWarsResourcesGridContainer';
import { StarWarsResourcesGridItem } from './StarWarsResourcesGridItem';

export const StarWarsResources = () => {
  const { data } = useGetStarWarResourcesQuery();
  const [starWarsResources, setStarWarsResources] = useState<
    StarWarResourceType[]
  >(data ?? []);

  const handleFilterChange = useCallback(
    (filter: StarWarResourceType) => {
      const filteredResources =
        data?.filter((resource) => resource === filter) ?? [];
      setStarWarsResources(filteredResources);
    },
    [data]
  );

  const handleFilterReset = useCallback(() => {
    setStarWarsResources(data ?? []);
  }, [data]);

  return (
    <Container>
      <Toolbar>
        <Stack
          direction={['column', 'row']}
          gap={3}
          justifyContent={['flex-start', 'space-between']}
          alignItems="center"
          flex={1}
          pt={3}
        >
          <Typography>Search</Typography>
          <FilterResource
            onFilter={(filter) => {
              handleFilterChange(filter);
            }}
            onFilterReset={handleFilterReset}
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
    </Container>
  );
};
