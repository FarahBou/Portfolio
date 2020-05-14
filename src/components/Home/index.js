// == Import npm
/* eslint-disable */
import React from 'react' ;

// == Import
import HomeStyled from './HomeStyled';

const Home = () => (
  <HomeStyled> 
    <div className='about' >
      <p className='content'>A propos</p> 
      <div className='night_about'>
        <div className='shooting_star'></div>   
        <div className='shooting_star'></div>  
        <div className='shooting_star'></div> 
        <div className='shooting_star'></div> 
        <div className='shooting_star'></div>  
      </div>             
    </div>
    <div className='skills' >
      <p className='content'>Compétences</p>
      <div className='night_skills'>
        <div className='shooting_star'></div>   
        <div className='shooting_star'></div>  
        <div className='shooting_star'></div> 
        <div className='shooting_star'></div> 
        <div className='shooting_star'></div>  
      </div>  
    </div>
    <div className='portfolio' >
      <p className='content'>Portfolio</p>
      <div className='night_portfolio'>
        <div className='shooting_star'></div>   
        <div className='shooting_star'></div>  
        <div className='shooting_star'></div> 
        <div className='shooting_star'></div> 
        <div className='shooting_star'></div>  
      </div>  
    </div>
    <div className='contact' >
      <p className='content'>Contact</p>
      <div className='night_contact'>
        <div className='shooting_star'></div>   
        <div className='shooting_star'></div>  
        <div className='shooting_star'></div> 
        <div className='shooting_star'></div> 
        <div className='shooting_star'></div>  
      </div>  
    </div>
  </HomeStyled>
);

window.onload=function(){
  var about = document.querySelector('.about');
  about.addEventListener('mouseover', () => {
    document.querySelector('.night_about').style.opacity = 1;
  });
  about.addEventListener('mouseout', () => {
    document.querySelector('.night_about').style.opacity = 0;
  });

  var skills = document.querySelector('.skills');
  skills.addEventListener('mouseover', () => {
    document.querySelector('.night_skills').style.opacity = 1;
  });
  skills.addEventListener('mouseout', () => {
    document.querySelector('.night_skills').style.opacity = 0;
  });

  var portfolio = document.querySelector('.portfolio');
  portfolio.addEventListener('mouseover', () => {
    document.querySelector('.night_portfolio').style.opacity = 1;
  });
  portfolio.addEventListener('mouseout', () => {
    document.querySelector('.night_portfolio').style.opacity = 0;
  });

  var contact = document.querySelector('.contact');
  contact.addEventListener('mouseover', () => {
    document.querySelector('.night_contact').style.opacity = 1;
  });
  contact.addEventListener('mouseout', () => {
    document.querySelector('.night_contact').style.opacity = 0;
  });
}


export default Home;
