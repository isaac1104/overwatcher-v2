import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;

class Sidebar extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  render() {
    return (
      <Fragment>
          <Sider
            collapsible
            collapsedWidth="0"
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            style={{ background: '#fff', minHeight: '80vh' }}
          >
            <div className="logo" />
            <Menu mode="inline">
              <Menu.Item key="1">
                <NavLink to="/dashboard">
                  <Icon type="dashboard" />
                  <span className="nav-text">Dashboard</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink to="/settings/profile">
                  <Icon type="user" />
                  <span className="nav-text">User Profile</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="3">
                <NavLink to="/projects">
                  <Icon type="database" />
                  <span className="nav-text">Projects</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="4">
                <NavLink to="/search">
                  <Icon type="environment-o" />
                  <span className="nav-text">Property Search</span>
                </NavLink>
              </Menu.Item>
            </Menu>
          </Sider>
      </Fragment>
    );
  }
}

export default Sidebar;
