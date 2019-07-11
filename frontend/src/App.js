import React, { useContext } from 'react';
import { StoreProvider, StoreContext } from './Store'
import Router from './router';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const themes = {
  LIGHT: createMuiTheme({
    palette: {
      primary: {
        main: '#008000'
      }
    }
  }),
  DARK: createMuiTheme({
    palette: {
      primary: {
        main: '#8080ff'
      }
    }
  })
}

const Layout = (props) => {
  const { state } = useContext(StoreContext);
  debugger;
  return (
    <ThemeProvider theme={themes[state.theme]}>
      <Router />
    </ThemeProvider>
  )
}
function App() {
  return (
    <div>
      <StoreProvider>
        <Layout />
      </StoreProvider>
    </div>
  );
}

export default App;
