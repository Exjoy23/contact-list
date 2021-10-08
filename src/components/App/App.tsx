import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import { ContactPage } from '../pages/ContactPage/ContactPage';
import { MainPage } from '../pages/MainPage/MainPage';
import './App.scss';

export const App = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path={AppRoute.MAIN} component={MainPage} />
      <Route exact path={AppRoute.CONTACTS} component={ContactPage} />
    </Switch>
  );
};
