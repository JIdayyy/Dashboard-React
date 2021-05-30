import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '../src/Views/App';
import Homepage from '../src/Views/homepage';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/app" component={App} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
