import React from 'react';
import MenuBar from './ui/MenuBar';
import Home from './pages/Home';
import Admin from './pages/Admin';
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

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      masterList : {
        '94cb016d-63bd-4965-8563-9591ec79ebc6': {
          name: 'Delicious IPA',
          brand: 'ninkasi',
          price: 6,
          abv: 10,
          pints: 12
        },
        '4678f4ff-50bd-4f84-b68f-15c275a6f865': {
          name: 'Amazing Lager',
          brand: 'rolling rock',
          price: 3,
          abv: 8,
          pints: 12
        },
        'd657380e-4401-4328-93e7-bf916f38f7df': {
          name: 'Scrumptous Porter',
          brand: 'porters r us',
          price: 5,
          abv: 7,
          pints: 12
        },
        '98edaf73-11d1-4075-afd2-3486cf89b413': {
          name: 'Believable Stout',
          brand: 'guiness',
          price: 5,
          abv: 6,
          pints: 12
        },
        '1319d14e-c93c-4e1f-be1e-d337891b8f09': {
          name: 'Fake Pale Ale',
          brand: 'pyramid',
          price: 4,
          abv: 5,
          pints: 12
        }
      }
    };
    this.handleKegAdd = this.handleKegAdd.bind(this);
    this.handleKegDelete = this.handleKegDelete.bind(this);
  }

  handleKegAdd(keg){
    const tempList = Object.assign({}, this.state.masterList,{
      [keg.id]: keg
    });
    this.setState({ masterList : tempList});
  }

  handleKegDelete(kegId){
    delete this.state.masterList[kegId];
  }

  render(){
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
              <Route exact path="/" render={() =>
                <Home masterList={this.state.masterList} />}
              />
              <Route path="/admin" render={(props) =>
                <Admin masterList={this.state.masterList}
                  currentRoute={props.location.pathname}
                  onKegAdd={this.handleKegAdd}
                  onKegDelete={this.handleKegDelete}/>}
              />
            </Switch>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
