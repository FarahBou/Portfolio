import styled from 'styled-components';

export default styled.div`  
min-height: 100vh;
background: linear-gradient(-45deg, #640D14, #38040E, #1D2D44, #0D1321);
background-size: 400% 400%;
animation: gradient 15s ease infinite;
overflow: hidden;
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;

.cards {  
  margin: 3rem;
  justify-content: space-evenly;
  display: flex;
  flex-wrap: wrap;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

h1 {
  font-family: 'Megrim', cursive;
  color: #F0EBD8 ;
  text-align: center;
  font-size: 3em;
  font-weight: 100;
}

@media only screen and (max-width: 720px){ 
  h1 {
    font-size: 2em;
  }
}

`;
