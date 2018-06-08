import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import PlayerDetail from './PlayerDetail/PlayerDetail';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/player/:id' component={PlayerDetail} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
