import { CssBaseline, ThemeProvider } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AppShell } from './AppShell';
import { Login } from './user/Login';
import { ProtectedRoute } from './ProtectedRoute';
import { theme } from './theme';
import { useIsLoggedIn } from './user/useIsLoggedIn';
import { UserProvider } from './user/userContext';
import { StarWarsResourcesPage } from './star-wars-resources/StarWarsResourcesPage';
import { Provider } from 'react-redux';
import { store } from './api';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <UserProvider>
          <AppRoot />
        </UserProvider>
      </ThemeProvider>
    </Provider>
  );
}

const AppRoot = () => {
  const isLoggedIn = useIsLoggedIn();

  return (
    <Routes>
      <Route path="/" element={<AppShell />}>
        <Route
          index
          element={
            <Navigate
              to={isLoggedIn ? 'star-wars-resources' : 'login'}
              replace
            />
          }
        />
        <Route path="/login" element={<Login />} />
        {/* TODO:404 route */}
        <Route
          path="star-wars-resources"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <StarWarsResourcesPage />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
