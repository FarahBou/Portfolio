import React from 'react';

// == Import

import Header from 'src/components/Header';
import ContactStyled from './ContactStyled';

// == Composant
const Contact = () => (
  <ContactStyled>
    <Header id="header" slug="Contact" />
    <h1>Contact</h1>
  </ContactStyled>
);


// == Export
export default Contact;
