import React, { Component } from 'react';
import SearchForm from './SearchForm/SearchForm';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

class Navbar extends Component {
  render() {
    const style = {
      menuItem: {
        cursor: 'auto'
      }
    }

    return (
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">
            <Link to='/'>
              <img src='/images/misc/owlogo.svg' className='img-fluid' alt='logo' width='50' height= '50'/> OVERWATCHER V2
            </Link>
          </Menu.Item>
          <Menu.Item key="2" className='float-right' style={style.menuItem}>
            <SearchForm />
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default Navbar;
