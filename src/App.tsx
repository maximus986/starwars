import { CssBaseline, ThemeProvider } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AppShell } from './AppShell';
import { Login } from './user/Login';
import { ProtectedRoute } from './ProtectedRoute';
import { theme } from './theme';
import { useIsLoggedIn } from './user/useIsLoggedIn';
import { UserProvider } from './user/userContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserProvider>
        <AppRoot />
      </UserProvider>
    </ThemeProvider>
  );
}

const AppRoot = () => {
  const isLoggedIn = useIsLoggedIn();

  return (
    <Routes>
      <Route path="/" element={<AppShell />}>
        <Route
          index
          element={<Navigate to={isLoggedIn ? 'welcome' : 'login'} replace />}
        />
        <Route path="/login" element={<Login />} />
        {/* TODO:404 route */}
        <Route
          path="/welcome"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <h1>Welcome</h1>
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
