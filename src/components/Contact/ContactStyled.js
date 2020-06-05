import styled from 'styled-components';

export default styled.div`  
min-height: 100vh;
background: linear-gradient(-45deg, #38040E, #38040E, #1D2D44, #0D1321);
background-size: 400% 400%;
animation: gradient 15s ease infinite;
overflow: hidden;
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;

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
  color: #F0EBD8 ;
  padding: 2.5rem;
  border-radius: 2rem;
  width: 60%;
  margin: 54px 0 30px;  
  border: 2px solid white;
} 

.actionsDesktop {
  margin-top: 2.5em;
  text-align: center;
}

.button {
  font-size: 1.5em;
}

@media only screen and (max-width: 550px){

  h1{
    font-size: 3em;
  }
  .formDesktop{
    padding: 2rem;
    border-radius: 1.5rem;
    width: 80%;
    margin: 54px 0 30px;  
  } 
}

@media only screen and (max-width: 450px){

  .formDesktop{
    border-radius: 1rem;
    margin: 54px 0 30px; 
  } 

  .button {
    font-size: 1em;
  }
}

`;
