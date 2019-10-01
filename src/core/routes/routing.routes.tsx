import React from 'react';
import { Route, Switch } from "react-router";
import HomeView from '../../modules/home/home.view';
import PdfView from '../../modules/pdf/pdf.view';

const Routing = () => {
  return (
    <Switch>
      <Route path="/home/" exact component={ HomeView } />
      <Route path="/pdf/" exact component={ PdfView } />
      <Route component={ HomeView } />
    </Switch>
  );
}

export default Routing;