import { Card, CardContent, CardHeader } from '@mui/material';

interface LoginCardProps {
  children: React.ReactNode;
}

export const LoginCard: React.FC<LoginCardProps> = ({ children }) => {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 500, margin: '24px auto 0' }}>
      <CardHeader title="Login" />
      <CardContent>{children}</CardContent>
    </Card>
  );
};
