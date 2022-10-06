import {
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { theme } from './theme';

const GLOBAL_STYLES = {
  body: {
    margin: 0,
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={GLOBAL_STYLES} />
      <Routes>
        <Route
          path="/"
          element={<Typography variant="h1">Starwars</Typography>}
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
