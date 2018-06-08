import React, { Component } from 'react';
import { Layout } from 'antd';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContentLayout from './Layout/ContentLayout';
import Navbar from './Navbar';
import Home from './Home';
import PlayerDetail from './PlayerDetail/PlayerDetail';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Layout>
            <Navbar/>
            <ContentLayout>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/player/:id' component={PlayerDetail}/>
              </Switch>
            </ContentLayout>
          </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
