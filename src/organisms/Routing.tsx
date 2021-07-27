import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { QuestionnairePage } from './questionnairePage';
import { HomePage } from './homePage';

export function Routing() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={HomePage} exact path='/' />
        <Route component={QuestionnairePage} path='/questionnaire' />
      </Switch>
    </BrowserRouter>
  )
}