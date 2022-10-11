import { Box, Card, CardContent, Skeleton } from '@mui/material';
import {
  StarWarsGridContainer,
  StarWarsGridItem,
  StarWarsPage,
} from '../shared';

export const StarWarsResourcesSkeleton = () => {
  return (
    <StarWarsPage>
      <StarWarsGridContainer>
        {Array(6)
          .fill('resource')
          .map((_, i) => (
            <StarWarsGridItem key={i}>
              <StarWarsItemSkeleton />
            </StarWarsGridItem>
          ))}
      </StarWarsGridContainer>
    </StarWarsPage>
  );
};

const StarWarsItemSkeleton = () => {
  return (
    <Card variant="outlined" elevation={0}>
      <Box p={2}>
        <Skeleton width="150px" variant="text" />
      </Box>
      <CardContent>
        <Box
          sx={{ height: ['auto', 155, 256, 224], overflow: 'hidden' }}
          mb={2}
        >
          <Skeleton variant="text" height="100%" />
        </Box>
        <Skeleton
          variant="circular"
          height={37}
          width={85}
          sx={{ borderRadius: 1 }}
        />
      </CardContent>
    </Card>
  );
};
