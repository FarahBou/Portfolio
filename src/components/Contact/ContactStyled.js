import styled from 'styled-components';

export default styled.div`  
min-height: 100vh;
background: linear-gradient(#748CAB, #800E13);
overflow: hidden;

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
 width: 40%;
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
