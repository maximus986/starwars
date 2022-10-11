import {
  Card,
  CardContent,
  CardHeader,
  Skeleton,
  Typography,
} from '@mui/material';
import { StarWarsCardSubtitle } from './StarWarsCardSubtitle';
import { StarWarsGridContainer } from './StarWarsGridContainer';
import { StarWarsGridItem } from './StarWarsGridItem';
import { StarWarsPage } from './StarWarsPage';

interface StarWarsSkeletonProps {
  items?: number;
}

export const StarWarsSkeleton: React.FC<StarWarsSkeletonProps> = ({
  items = 10,
}) => {
  return (
    <StarWarsPage>
      <StarWarsGridContainer>
        {Array(items)
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
