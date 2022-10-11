import { CssBaseline, ThemeProvider } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AppShell } from './AppShell';
import { Login } from './user/Login';
import { ProtectedRoute } from './ProtectedRoute';
import { theme } from './theme';
import {
  StarWarsResourcesPage,
  StarWarsPeoplePage,
  StarWarsFilmsPage,
  StarWarsSpeciesPage,
  StarWarsVehiclesPage,
  StarWarsStarshipsPage,
} from './star-wars-resources';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store, useAppSelector } from './api';
import { NotFound } from './NotFound';
import { StarWarsPlanetsPage } from './star-wars-resources/planets/StarWarsPlanetsPage';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppRoot />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

const AppRoot = () => {
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);

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
        <Route
          path="/star-wars-resources/vehicles"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <StarWarsVehiclesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/star-wars-resources/starships"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <StarWarsStarshipsPage />
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
