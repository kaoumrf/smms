import React, { Component } from 'react'
import './Footer.css'
import Social from'../social/Social'
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <ul> <li><div>
                    <h1>bla blo :</h1>
                    <p>azezoeozoepazoepozpe
                        ezpeo^pzo^peozpôepôz
                        ezoekzoepzpoeopozeooe</p> </div>                  
                </li>
                        <li><div className="middle"><h1>What about us ?</h1> akdopzkaepeair of
                        eriezorf ezoufo irzf
                        zefiozriouizr uazrzroigoriugoir</div>
                 </li> 
                 <li><div>
                <h1>bla blo :</h1>
                    <p>azezoeozoepazoepozpe
                        ezpeo^pzo^peozpôepôz
                    ezoekzoepzpoeopozeooe</p> </div>
                </li> 
                </ul>
              
             
                <ul>
                   
                <li>
                        <Social/>
                        
                 </li>
                <li>
                    <a target="_blanc" href="/" className="k">
                            Privacy & terms
                        </a>                        
                </li>
                 <li>
                    <a target="_blanc" href="/" className="kk">
                           Contact us
                        </a>                        
                 </li>
                </ul>
            </div>
        )
    }
}

export default Footer