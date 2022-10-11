import { Card, CardContent, CardHeader, Box, Button } from '@mui/material';
import { StarWarResourceType } from '../api';
import people from './images/people.webp';
import vehicles from './images/vehicles.webp';
import species from './images/species.webp';
import starships from './images/starships.webp';
import planets from './images/planets.webp';
import films from './images/films.webp';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { usePrefetchResources } from './usePrefetchResources';

interface StarWarsResourceProps {
  resource: StarWarResourceType;
}

const resourceImageMap: Record<StarWarResourceType, string> = {
  films,
  people,
  planets,
  species,
  starships,
  vehicles,
};

export const StarWarsResource: React.FC<StarWarsResourceProps> = ({
  resource,
}) => {
  const prefetchResource = usePrefetchResources(resource);

  return (
    <Card variant="outlined" elevation={0}>
      <CardHeader title={resource} sx={{ textTransform: 'capitalize' }} />
      <CardContent>
        <Box
          sx={{ height: ['auto', 155, 256, 224], overflow: 'hidden' }}
          mb={2}
        >
          <Image
            src={resourceImageMap[resource]}
            alt={resource}
            loading="lazy"
          />
        </Box>
        <Button
          component={Link}
          to={`/star-wars-resources/${resource}`}
          variant="contained"
          onMouseEnter={prefetchResource}
        >
          Details
        </Button>
      </CardContent>
    </Card>
  );
};

const Image = styled.img`
  max-width: 100%;
`;
