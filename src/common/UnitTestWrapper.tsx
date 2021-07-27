import React, { FC } from 'react';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './theme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

export const UnitTestWrapper: FC = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          {children}
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  )
}