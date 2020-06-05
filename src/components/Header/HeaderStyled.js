import styled from 'styled-components';

export default styled.div`   
  
display: flex;
flex-direction: row;
overflow: hidden;
position: absolute;
left: 40px;
top: 20px; 

p {
  padding: 0 10px;
  color: #F0EBD8 ;
  font-size: 1.2em;
  font-family: 'Megrim', cursive;
  text-shadow: 1px 1px 3px black; 
}

@media only screen and (max-device-width: 520px){
  left: 20px;
  p {
    padding: 0 9px;
    color: #F0EBD8 ;
    font-size: 1em;
    font-family: 'Megrim', cursive;
    text-shadow: 1px 1px 3px black; 
  }
}

@media only screen and (max-device-width: 420px){
  left: 13px;
  p {
    padding: 0 7px;
    color: #F0EBD8 ;
    font-size: 0.9em;
    font-family: 'Megrim', cursive;
    text-shadow: 1px 1px 3px black; 
  }
}

@media only screen and (max-device-width: 360px){
  left: 13px;
  p {
    padding: 0 5px;
    color: #F0EBD8 ;
    font-size: 0.8em;
    font-family: 'Megrim', cursive;
    text-shadow: 1px 1px 3px black; 
  }
}

`;
