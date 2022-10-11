import {
  Card,
  CardContent,
  CardHeader,
  Skeleton,
  Typography,
} from '@mui/material';
import {
  StarWarsPage,
  StarWarsGridContainer,
  StarWarsGridItem,
  StarWarsCardSubtitle,
} from '../../shared';

export const StarWarsPeopleSkeleton = () => {
  return (
    <StarWarsPage>
      <StarWarsGridContainer>
        {Array(10)
          .fill('resource')
          .map((_, i) => (
            <StarWarsGridItem key={i}>
              <StarWarsPersonSkeleton />
            </StarWarsGridItem>
          ))}
      </StarWarsGridContainer>
    </StarWarsPage>
  );
};

const StarWarsPersonSkeleton = () => {
  return (
    <Card variant="outlined">
      <CardHeader title={<Skeleton variant="text" />} />
      <CardContent>
        <StarWarsCardSubtitle>
          <Skeleton width="80%" variant="text" />
        </StarWarsCardSubtitle>
        <Typography>
          <Skeleton width="80%" variant="text" />
        </Typography>
        <StarWarsCardSubtitle>
          <Skeleton width="80%" variant="text" />
        </StarWarsCardSubtitle>
        <Typography>
          <Skeleton width="80%" variant="text" />
        </Typography>
        <StarWarsCardSubtitle>
          <Skeleton width="80%" variant="text" />
        </StarWarsCardSubtitle>
        <Typography>
          <Skeleton width="80%" variant="text" />
        </Typography>
      </CardContent>
    </Card>
  );
};
