import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Menu.js';
import Head from './components/head-section/Head.js';
import Services from './components/services/Services.js';
import Headr from './components/head/Head.js';

import Foter from'./components/footer/Footer.js'
import ContactUs from './components/contactUs/ContactUs.js';
import { Layout } from 'antd';

const {
  Header, Footer, Content,
} = Layout;
class App extends Component {
  render() {
    return (
    <div>
      <div className="App">
        <Layout style={{height:'100%',padding:0,background:"white"}}>
          <Header style={{boxShadow:"0 0 30px #f3f1f1",height:'100%',padding:0,background:"white"}}> 
            <Navbar />
          </Header>
          <Content >
            <Head />
            <Services />
            <ContactUs/>
          </Content>
          <Footer style={{height:'100%',padding:0}}>
            <Foter/>
          </Footer>
        </Layout>
      </div>       
    </div>
    );
  }
}

export default App;
