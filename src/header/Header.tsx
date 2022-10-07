import { AppBar, Button, Container, Grid, Stack, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../star-wars.svg';

const APP_BAR_HEIGHT = 80;

export const Header = () => {
  const navigate = useNavigate();
  return (
    <AppBar
      position="static"
      variant="outlined"
      elevation={0}
      sx={{
        flexGrow: 1,
        backgroundColor: 'background.paper',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar
        sx={{
          height: `${APP_BAR_HEIGHT}px`,
          '&.MuiToolbar-root': {
            paddingRight: 0,
            paddingLeft: 0,
          },
        }}
      >
        <Container>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            flexGrow={1}
          >
            <Logo width="80px" />
            <Button variant="contained" onClick={() => navigate('login')}>
              Login
            </Button>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
