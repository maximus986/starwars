import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Box textAlign="center" mt={10}>
      <Typography variant="h4" mb={3}>
        Looks like we can’t find this page
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" mb={11}>
        You can check star wars resources.
      </Typography>
      <Button
        onClick={() => navigate('/star-wars-resources')}
        variant="contained"
      >
        Check star wars resources
      </Button>
    </Box>
  );
};
