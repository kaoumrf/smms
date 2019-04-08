import React, { Component } from 'react';

import Adress from '../adress/Adress.js';
import Contact from '../contact/Contact.js';
import Formc from '../form/Formc.js';



class ContactUs extends Component {
  render() {
    return (
      <div id="contact">
       <Contact></Contact>
        <Formc></Formc>
       <Adress></Adress>

      </div>
    );
  }
}

export default ContactUs;