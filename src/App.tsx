import React from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';  

import NavBar from './components/Navbar';
import MainScreen from './components/MainScreen';
import { useSelector } from 'react-redux';

import { codeState } from "./codeReducer";


function App() {
  const themeValue = useSelector<codeState, string>((state) => state.theme);
  const theme = createMuiTheme({
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
    <MuiThemeProvider theme={theme}>
      {/* <NavBar/> */}
      <MainScreen />    
    </MuiThemeProvider>
  );
}

export default App;
