import { CssBaseline, ThemeProvider } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AppShell } from './AppShell';
import { Login } from './user/Login';
import { ProtectedRoute } from './ProtectedRoute';
import { theme } from './theme';
import { useIsLoggedIn } from './user/useIsLoggedIn';
import { UserProvider } from './user/userContext';
import {
  StarWarsResourcesPage,
  StarWarsPeoplePage,
  StarWarsFilmsPage,
  StarWarsSpeciesPage,
} from './star-wars-resources';
import { Provider } from 'react-redux';
import { store } from './api';
import { NotFound } from './NotFound';
import { StarWarsPlanetsPage } from './star-wars-resources/planets/StarWarsPlanetsPage';

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
              to={isLoggedIn ? '/star-wars-resources' : '/login'}
              replace
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/star-wars-resources"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <StarWarsResourcesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/star-wars-resources/people"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <StarWarsPeoplePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/star-wars-resources/planets"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <StarWarsPlanetsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/star-wars-resources/films"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <StarWarsFilmsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/star-wars-resources/species"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <StarWarsSpeciesPage />
            </ProtectedRoute>
          }
        />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
