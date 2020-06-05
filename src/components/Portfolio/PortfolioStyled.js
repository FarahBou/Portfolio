import styled from 'styled-components';

export default styled.div`  
height: 100vh;
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
`;
