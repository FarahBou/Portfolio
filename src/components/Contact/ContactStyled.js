import styled from 'styled-components';

export default styled.div`  
min-height: 100vh;
background: linear-gradient(#1D2D44, #38040E);
overflow: hidden;
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;

#header {
  z-index: 1;
}

h1{
  font-family: 'Megrim', cursive;
  color: #F0EBD8 ;
  text-align: center;
  font-size: 4em;
  padding-top: 90px;
  text-shadow: 1px 1px 3px black; 
}

.formDesktop{
 padding: 2.5rem;
 border-radius: 2rem;
 width: 70%;
 margin: 54px 30% 30px;  
 border: 2px solid white;
} 

.actionsDesktop {
  margin-top: 2.5em;
  text-align: center;
}

.button {
  font-family: 'Megrim', cursive;
  font-size: 1.5em;
}

`;
