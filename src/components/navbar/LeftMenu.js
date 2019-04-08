import React, { Component } from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
class LeftMenu extends Component {
  render() {
    return (
   <Menu mode="horizontal">
       <Menu.Item key="mail">
          <a href="#head">Accueil</a>
        </Menu.Item>
        <SubMenu href="#services" title={<span>Services</span>}>
          <Menu.Item title="Service 1" key="setting:1">Service 1</Menu.Item>
          <Menu.Item title="Service 2" key="setting:2">Service 2</Menu.Item>
          <Menu.Item title="Service 3" key="setting:3">Service 3</Menu.Item>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="#contact">Contact</a>
        </Menu.Item>
      </Menu>
    );
  }
}
export default LeftMenu;