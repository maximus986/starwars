import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from './header/Header';

export const AppShell = () => {
  return (
    <>
      <Header />
      <Box component="main">
        <Outlet />
      </Box>
    </>
  );
};
