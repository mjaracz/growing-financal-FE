import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage } from './homePage';

export function Routing() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={HomePage} exact path='/' />
      </Switch>
    </BrowserRouter>
  )
}