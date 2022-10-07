import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AppShell } from './AppShell';
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
        <Route path="/" element={<AppShell />}>
          <Route index element={<Navigate to="welcome" replace />} />
          <Route path="/login" element={<h1>Login</h1>}></Route>
          <Route path="/welcome" element={<h1>Welcome</h1>}></Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
