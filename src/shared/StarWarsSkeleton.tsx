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
} from '.';

export const StarWarsSkeleton = () => {
  return (
    <StarWarsPage>
      <StarWarsGridContainer>
        {Array(10)
          .fill('resource')
          .map((_, i) => (
            <StarWarsGridItem key={i}>
              <StarWarsSkeletonItem />
            </StarWarsGridItem>
          ))}
      </StarWarsGridContainer>
    </StarWarsPage>
  );
};

const StarWarsSkeletonItem = () => {
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
