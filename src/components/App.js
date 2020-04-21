import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import UserInterface from './UserInterface';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/userinterface" component={UserInterface}></Route>
      </Switch>
    </>
  );
};
export default App;
