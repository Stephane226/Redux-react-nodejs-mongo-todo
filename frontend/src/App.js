import React from 'react';
import Home from './pages/home';
import View from './pages/view';
import Update from './pages/update';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';


function App() {

  let route = (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/view" component={View} />
      <Route path="/update" component={Update} />
      <Redirect to='/' />
    </Switch>
    )


  return (
    <>
    {route}
   </>

  );
}

export default  withRouter(App);