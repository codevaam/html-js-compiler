import React from 'react';
import './App.css';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';  
import {Route, Switch} from "react-router-dom";
import NavBar from './components/Navbar';
import MainScreen from './components/MainScreen';

function App() {
  const theme = createTheme({
    palette: {
      type: 'light',
       primary: {
          light: '#fff',
          main: 'rgb(23, 105, 170)',
          dark: 'rgb(25,25,25)'
       },
       secondary: {
         main: '#f44336',
         dark: 'rgb(25,25,25)'
       },
    },
  });
  return (
    <Switch>
    <MuiThemeProvider theme={theme}>
      <Route path="/">
        <NavBar/>
        <MainScreen />    
      </Route>
    </MuiThemeProvider>
    </Switch>
  );
}

export default App;
