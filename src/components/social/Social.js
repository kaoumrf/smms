import React, { Component } from 'react'
import './Social.css'
import fbLogo from '../../assets/icons/facebook-logo.png'
import isLogo from '../../assets/icons/instagram-logo.png'
import twLogo from '../../assets/icons/twitter-logo.png'
class Social extends Component {
    render() {
        return (
            <nav className="social">
                <ul>
                    <li>
                        <a target="_blanc" href="https://www.facebook.com/gen42visibility/" className="l">
                            <img alt="fblogo" src={fbLogo}/>
                        </a>
                    </li>
                    <li>
                        <a target="_blanc" href="https://www.instagram.com/explore/locations/386012746/gen-42/" className="l">
                            <img alt="instalogo" src={isLogo}/>

                        </a>
                        </li>
                    <li>
                        <a target="_blanc" href="https://twitter.com/gen42_" className="l">
                            <img alt="twitlogo " src={twLogo}/>

                        </a>
                    </li>
                    
                </ul>
            </nav>
        )
    }
}

export default Social