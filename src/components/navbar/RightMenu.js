import React, { Component } from 'react';
import { Menu } from 'antd';
import WrappedNormalLoginForm from './Login.js';
import WrappedRegistrationForm from './Signup.js';

class RightMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="mail">
          <WrappedNormalLoginForm />
        </Menu.Item>
        <Menu.Item key="app">
          <WrappedRegistrationForm />
        </Menu.Item>
      </Menu>
    );
  }
}
export default RightMenu;