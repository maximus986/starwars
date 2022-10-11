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
import { SWRoutes } from './shared';

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
              to={isLoggedIn ? SWRoutes.StarWarsResources : SWRoutes.Login}
              replace
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path={SWRoutes.StarWarsResources}
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <StarWarsResourcesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={SWRoutes.People}
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <StarWarsPeoplePage />
            </ProtectedRoute>
          }
        />
        <Route
          path={SWRoutes.Planets}
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <StarWarsPlanetsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={SWRoutes.Films}
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <StarWarsFilmsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={SWRoutes.Species}
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <StarWarsSpeciesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={SWRoutes.Vehicles}
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <StarWarsVehiclesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={SWRoutes.Starships}
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <StarWarsStarshipsPage />
            </ProtectedRoute>
          }
        />
        <Route path={SWRoutes.NotFound} element={<NotFound />} />
        <Route path="*" element={<Navigate to={SWRoutes.NotFound} replace />} />
      </Route>
    </Routes>
  );
};

export default App;
