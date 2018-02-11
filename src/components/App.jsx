import React from 'react';
import MenuBar from './ui/MenuBar';
import KegList from './pages/KegList';
import AddKeg from './pages/AddKeg';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { Switch, Route } from 'react-router-dom';
import Reboot from 'material-ui/Reboot';


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
      <style jsx global>{`
        a {
          color: inherit;
          text-decoration: none;
        }
      `}</style>
      <Reboot />
      <MuiThemeProvider theme={theme}>
        <div>
          <MenuBar />
          <Switch>
            <Route exact path="/" component={KegList} />
            <Route path="/add" component={AddKeg} />
          </Switch>
        </div>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
