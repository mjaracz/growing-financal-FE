import React from 'react';
import { Routing } from 'organisms/Routing';
import { theme } from 'common/theme';
import { ThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routing />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
