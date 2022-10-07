import { Box, Container } from '@mui/material';
import { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './header/Header';

export const AppShell = () => {
  return (
    <>
      <Header />
      <Box component="main" mt={4}>
        <Container>
          <Outlet />
        </Container>
      </Box>
    </>
  );
};
