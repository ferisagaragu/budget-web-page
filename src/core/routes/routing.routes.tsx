import React from 'react';
import { Route, Switch } from "react-router";
import HomeView from '../../modules/home/home.view';
import BudgetView from '../../modules/budget/budget.view';

const Routing = () => {
  return (
    <Switch>
      <Route path="/home/" exact component={ HomeView } />
      <Route path="/budget/" exact component={ BudgetView } />
      <Route component={ HomeView } />
    </Switch>
  );
}

export default Routing;