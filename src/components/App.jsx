import React from 'react';
import MenuBar from './ui/MenuBar';
import KegList from './pages/KegList';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#4f5b62',
      main: '#263238',
      dark: '#000a12',
      contrastText: '#80cbc4',
    },
    secondary: {
      light: '#39796b',
      main: '#004d40',
      dark: '#00251a',
      contrastText: '#80cbc4',
    },
  },
});

function App() {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <div>
          <MenuBar />
          <KegList />
        </div>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
