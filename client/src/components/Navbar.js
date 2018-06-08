import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

class Navbar extends Component {
  render() {
    return (
        <Header>
        <div className="logo"/>
        <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
          <Menu.Item>
            <Link to='/'>
              OVERWATCHER V2
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default Navbar;
