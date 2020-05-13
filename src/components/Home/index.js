// == Import npm
/* eslint-disable */
import React from 'react' ;

// == Import
import HomeStyled from './HomeStyled';

const Home = () => (
  <HomeStyled> 
    <div className='about' >
      <p className='content'>A propos</p> 
      <div className='night'>
        <div className='shooting_star'></div>   
        <div className='shooting_star'></div>  
        <div className='shooting_star'></div> 
        <div className='shooting_star'></div> 
        <div className='shooting_star'></div>  
      </div>             
    </div>
    <div className='skills' >
      <p className='content'>Compétences</p>
      <div className='night'>
        <div className='shooting_star'></div>   
        <div className='shooting_star'></div>  
        <div className='shooting_star'></div> 
        <div className='shooting_star'></div> 
        <div className='shooting_star'></div>  
      </div>  
    </div>
    <div className='portfolio' >
      <p className='content'>Portfolio</p>
      <div className='night'>
        <div className='shooting_star'></div>   
        <div className='shooting_star'></div>  
        <div className='shooting_star'></div> 
        <div className='shooting_star'></div> 
        <div className='shooting_star'></div>  
      </div>  
    </div>
    <div className='contact' >
      <p className='content'>Contact</p>
      <div className='night'>
        <div className='shooting_star'></div>   
        <div className='shooting_star'></div>  
        <div className='shooting_star'></div> 
        <div className='shooting_star'></div> 
        <div className='shooting_star'></div>  
      </div>  
    </div>
  </HomeStyled>
);


export default Home;
