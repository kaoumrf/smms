import React, { Component } from 'react'
import './Newacount.css'
import { Card ,Icon,Button} from 'antd';


class Newacount extends Component{
    render(){
       

      return(
        < Card 
        className="New"
                 title="Ajouter un compte :"  
         bodyStyle={{marginBottom:30, marginTop:30,marginLeft:120,alignItems:"center" }} 
         style={{ borderColor:"black",width: 700 ,height:600,marginBottom:140, marginTop:90,marginLeft:370}}
         >
        
    <Button  style={{ width: 400 ,height:70,fontSize:25,borderRadius:15,marginTop:20,borderColor:"rgb(52, 204, 240)"}}>Ajouter un compte Facebook  <Icon type="facebook" style={{color:"rgb(60,90,153)",fontSize:40}}></Icon></Button>  
      <Button  style={{ width: 400 ,height:70,fontSize:25,borderRadius:15,marginTop:20,borderColor:"rgb(218, 116, 116)",marginRight:80}}>Ajouter un compte Instagram <Icon type="instagram" style={{color:"rgb(253,29,29)",fontSize:40}}></Icon></Button>

    <Button style={{ width: 400 ,height:70,fontSize:25,borderRadius:15,marginTop:20,borderColor:"rgb(0, 183, 255)"}}>   Ajouter  un  compte  Twitter <Icon type="twitter" style={{color:"rgb(29,161,242)",fontSize:40,alignContent:"right"}}></Icon> </Button>
    <Button    style={{ width: 120 ,height:70,fontSize:25,borderRadius:15,marginLeft:140,marginTop:90,borderColor:'black'}}>Done</Button>

  </Card>
     
        
      );
    }
    }
    
    
export default Newacount