
import React, { Component } from 'react';
import './First.css';
import Navbar from '../navbar/Menu.js';
import Head from '../head-section/Head.js';
import Services from '../services/Services.js';
import Headr from '../head/Head.js';

import Foter from'../footer/Footer.js'
import ContactUs from '../contactUs/ContactUs.js';
import { Layout } from 'antd';


const {
    Header, Footer, Content,
  } = Layout;
  class First extends Component {
    render() {
      return (
   
       <div className="First">
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
  
      );
    }
  }
  
  export default First;
