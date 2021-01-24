import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppLayout from './components/AppLayout/AppLayout';
import HeaderNav from './containers/HeaderNav/HeaderNav';
import Home from './containers/Home/Home';
import Watch from './containers/Watch/Watch';

class App extends Component{
render () {
  return (
    <AppLayout>
      <Switch>
        <Route path="/watch" component={Watch}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </AppLayout>
  );
}
}

export default App;