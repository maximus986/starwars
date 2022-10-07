import { AppBar, Container, Stack, Toolbar } from '@mui/material';
import { ReactComponent as Logo } from '../star-wars.svg';

export const Header = () => {
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
          '&.MuiToolbar-root': {
            paddingRight: 0,
            paddingLeft: 0,
          },
        }}
      >
        <Container>
          <Stack direction="row" justifyContent="center" flexGrow={1}>
            <Logo width="80px" height="80px" />
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
