import React from 'react';
import 'antd/dist/antd.css';
import { Icon} from 'antd';
import "./Adress.css";


class Adress  extends React.Component{
render(){
return (

<div className="adressContainer">

    <aside>
            <h3> Outil de gestion de réseaux sociaux-GEN 42 </h3>

            <Icon type="environment" theme="filled" /><strong> &nbsp;Adresse:  </strong><span>&nbsp; GEN 42, Cité Sonelgaz 205 Logements, n°15, Ben Aknoun, Alger, Algérie</span><br></br>

            <Icon type="pushpin" theme="filled" />

            <strong>  &nbsp;Ville:   </strong><span>&nbsp; Alger</span><br></br>

            <Icon type="mail" theme="filled" /> <strong>&nbsp;Email  </strong>

            <a href="mailto:contact@gen-42.com">

            <span>contact@gen-42.com</span><br></br>

            </a>
            <Icon type="phone" theme="filled" />

            <abbr>&nbsp;Tèl:</abbr>

            <span>&nbsp;+213 23 384 421</span><br></br>

            <Icon type="printer" theme="filled" /> <abbr>&nbsp;Fax:</abbr>
            
            <span>&nbsp;+213 23 384 421</span>


    </aside>
</div>

 );  
   
}}


export default Adress;