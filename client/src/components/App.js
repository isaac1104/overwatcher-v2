import React, { Component } from 'react';
import { Layout } from 'antd';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContentLayout from './Layout/ContentLayout';
import Navbar from './Navbar';
import FooterNav from './FooterNav';
import Home from './Home';
import PlayerDetail from './PlayerDetail/PlayerDetail';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Layout>
            <Navbar/>
            <ContentLayout>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/player/notfound' component={NotFound} />
                <Route exact path='/player/stats/:id' component={PlayerDetail} />
              </Switch>
            </ContentLayout>
            <FooterNav />
          </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
