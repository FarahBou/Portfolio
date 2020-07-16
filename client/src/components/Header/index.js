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
    const about = document.querySelector('#about');
    const skills = document.querySelector('#skills');
    const portfolio = document.querySelector('#portfolio');
    const contact = document.querySelector('#contact');

    about.addEventListener('mouseover', () => {
      about.style.textDecoration = 'underline';
    });
    about.addEventListener('mouseout', () => {
      about.style.textDecoration = null;
    });
    skills.addEventListener('mouseover', () => {
      skills.style.textDecoration = 'underline';
    });
    skills.addEventListener('mouseout', () => {
      skills.style.textDecoration = null;
    });
    portfolio.addEventListener('mouseover', () => {
      portfolio.style.textDecoration = 'underline';
    });
    portfolio.addEventListener('mouseout', () => {
      portfolio.style.textDecoration = null;
    });
    if (slug === 'A propos') {
      about.style.fontWeight = 'bold';
    }
    contact.addEventListener('mouseover', () => {
      contact.style.textDecoration = 'underline';
    });
    contact.addEventListener('mouseout', () => {
      contact.style.textDecoration = null;
    });

    if (slug === 'Skills') {
      skills.style.fontWeight = 'bold';
    }
    if (slug === 'Portfolio') {
      portfolio.style.fontWeight = 'bold';
    }
    if (slug === 'Contact') {
      contact.style.fontWeight = 'bold';
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
