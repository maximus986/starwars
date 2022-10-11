import { Card, CardContent, CardHeader } from '@mui/material';

interface StarWarsCardProps {
  cardTitle: string;
  children: React.ReactNode;
}

export const StarWarsCard: React.FC<StarWarsCardProps> = ({
  cardTitle,
  children,
}) => {
  return (
    <Card variant="outlined">
      <CardHeader title={cardTitle} />
      <CardContent>{children}</CardContent>
    </Card>
  );
};
