import React, { Component } from 'react';
import { Menu } from 'antd';
import "./nav.css"
const SubMenu = Menu.SubMenu;
class LeftMenu extends Component {
  render() {
    return (
   <Menu mode="horizontal">
       <Menu.Item key="mail">
          <a href="#head">Accueil</a>
        </Menu.Item>
        <SubMenu href="#services"  className="Color"  title={<span>Services</span>}>
          <Menu.Item title="Service 1" key="setting:1" className="Color" >Service 1</Menu.Item>
          <Menu.Item title="Service 2" key="setting:2" className="Color" >Service 2</Menu.Item>
          <Menu.Item title="Service 3" key="setting:3" className="Color" >Service 3</Menu.Item>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="#contact">Contact</a>
        </Menu.Item>
      </Menu>
    );
  }
}
export default LeftMenu;