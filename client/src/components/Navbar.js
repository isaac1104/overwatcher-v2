import React, { Component } from 'react';
import SearchForm from './SearchForm/SearchForm';
import { Link } from 'react-router-dom';
import { Layout, Row, Col } from 'antd';
const { Header } = Layout;

class Navbar extends Component {
  render() {
    const style = {
      navbar: {
        lineHeight: '64px'
      },
      logo: {
        width: 25,
        height: 25
      },
      div: {
        marginBottom: '10px'
      },
      link: {
        color: '#fff'
      }
    }

    return (
      <Header>
        <Row type='flex' justify='space-between' align='middle' style={style.navbar}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} style={style.div}>
            <Link to='/' style={style.link}>
              <img src='/images/misc/owlogo.svg' alt='logo' style={style.logo} /> OVERWATCHER V2
            </Link>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <SearchForm />
          </Col>
        </Row>
        {/* <Menu
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
        </Menu> */}
      </Header>
    );
  }
}

export default Navbar;
