import { Box, Typography } from '@mui/material';
import { StarWarResourceType, useGetStarWarResourcesQuery } from '../api';
import { StarWarsResource } from './StarWarsResource';
import { StarWarsResourcesGridContainer } from './StarWarsResourcesGridContainer';
import { StarWarsResourcesGridItem } from './StarWarsResourcesGridItem';

export const StarWarsResources = () => {
  const { data: starWarsResources } = useGetStarWarResourcesQuery();

  if (!starWarsResources) {
    return null;
  }

  return (
    <>
      <Typography variant="h3" mb={6} textAlign="center">
        Star Wars Resources
      </Typography>
      <StarWarsResourcesGridContainer>
        {Object.keys(starWarsResources).map((resource) => {
          return (
            <StarWarsResourcesGridItem key={resource}>
              <StarWarsResource resource={resource as StarWarResourceType} />
            </StarWarsResourcesGridItem>
          );
        })}
      </StarWarsResourcesGridContainer>
    </>
  );
};
