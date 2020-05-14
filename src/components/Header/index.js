/* eslint-disable no-console */
// == Import npm
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


// == Import
import HeaderStyled from './HeaderStyled';

// == Composant
const Header = ({ slug }) => {
  useEffect(() => {
    if (slug === 'A propos') {
      document.querySelector('#about').style.textDecoration = 'underline';
      document.querySelector('#about').style.fontWeight = 'bold';
    }
    if (slug === 'Skills') {
      document.querySelector('#skills').style.textDecoration = 'underline';
      document.querySelector('#skills').style.fontWeight = 'bold';
    }
    if (slug === 'Portfolio') {
      document.querySelector('#portfolio').style.textDecoration = 'underline';
      document.querySelector('#portfolio').style.fontWeight = 'bold';
    }
    if (slug === 'Contact') {
      document.querySelector('#contact').style.textDecoration = 'underline';
      document.querySelector('#contact').style.fontWeight = 'bold';
    }
  }, [{ slug }]);

  return (
    <HeaderStyled>
      <Link to="/A-propos">
        <p id="about">A propos</p>
      </Link>
      <Link to="/Compétences">
        <p id="skills">Compétences</p>
      </Link>
      <Link to="/Portfolio">
        <p id="portfolio">Portfolio</p>
      </Link>
      <Link to="/Contact">
        <p id="contact">Contact</p>
      </Link>
    </HeaderStyled>
  );
};


Header.propTypes = {
  slug: PropTypes.string.isRequired,
};
// == Export
export default Header;
