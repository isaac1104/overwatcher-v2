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
        width: 35,
        height: 35
      },
      div: {
        marginBottom: '10px'
      },
      link: {
        color: '#fff',
        marginLeft: '12px'
      }
    };

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
      </Header>
    );
  }
}

export default Navbar;
