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
background-color : #F0EBD8;
 padding: 3rem;
 border-radius: 2rem;
 width: 50%;
 margin: 54px 25% 30px;  
} 

.actionsDesktop {
  margin-top: 3em;
  text-align: center;
}

.button {
  font-family: 'Megrim', cursive;
  font-size: 1.5em;
}

`;
