import { Menu,Input,notification,Button,Drawer, Icon } from 'antd';
import React from 'react';
import './Head.css';
import MenuItem from 'antd/lib/menu/MenuItem';

const SubMenu = Menu.SubMenu;
const openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      style: {
        width: 600,
        marginLeft: 335 - 600,
      },
    });
  };
const Search = Input.Search;
class Head extends React.Component {
  state = {
    current: 'mail',
  }

 
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    return (<div>
                <div className="logo">
                    <a href="/">
                    <img src="/assets/gen42-header.jpg" alt ="Logo"/>
                    </a>
                </div>
    
      <Menu className="menus"
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"  
      >
       <Search  className="subm" Icon="search"
      placeholder="input search text"
      onSearch={value => console.log(value)}/>
     <Button className="btns"   ><Icon type="user-add" style={{fontSize:20}}/></Button>
     <Button className="btns"    ><Icon type="folder-add" style={{fontSize:20}}/></Button>
     <Button className="btns" Icon="notification" onClick={openNotification}  style={{border:0 }}><Icon type="bell" style={{fontSize:23}}/></Button>
        <SubMenu style={{border:3,borderColor:"black", marginTop:4, paddingBottom:0,marginBottom:0,color:"black",fontSize:23}} title={<span className="submenu-title-wrapper"><Icon type="user" style={{fontSize:23}} /> Username </span>}>
            <Menu.Item key="setting:1" style={{marginTop:4, paddingBottom:0,marginBottom:0,color:"black"}} ><Icon type="setting" />parametre </Menu.Item>
            <Menu.Item key="setting:2" style={{marginTop:4, paddingBottom:0,marginBottom:0,color:"black"}} ><Icon type="logout" />log out  </Menu.Item>
        </SubMenu>
        <MenuItem style={{float:"right" }}><Button className="barsMenu" type="primary" onClick={this.showDrawer}>
		          <span className="barsBtn"></span>
		        </Button>
        </MenuItem>
      </Menu> 
       <Drawer
		          title="Basic Drawer"
		          placement="right"
		          closable={false}
		          onClose={this.onClose}
		          visible={this.state.visible}
		        >
		         <Search  className="sub" Icon="search"
      placeholder="input search text"
      onSearch={value => console.log(value)}/>
      <Button className="btn"   ><Icon type="user-add" style={{fontSize:20}}/>Ajouter employé </Button>
     <Button className="btn"    ><Icon type="folder-add" style={{fontSize:20}}/>Créé un projet</Button>
     <Button className="btn" Icon="notification" onClick={openNotification}  ><Icon type="bell" style={{fontSize:23}}/>Notifications</Button>
     <Button className="btn"    ><Icon type="setting" style={{fontSize:20}}/>parametre </Button>
     <Button className="btn"    ><Icon type="logout" style={{fontSize:20}}/>log out  </Button>
     
		        </Drawer>
            </div>
    );
  }
}

export default Head