import styled from 'styled-components';

export default styled.div`  
height: 100vh;
background: linear-gradient(-45deg, #640D14, #38040E, #1D2D44, #0D1321);
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

h1 {
  font-family: 'Megrim', cursive;
  color: #F0EBD8 ;
  text-align: center;
  font-size: 4em;
  padding-top: 90px;
  text-shadow: 1px 1px 3px black; 
}

.cards {
  display: flex;
  flex-direction: row; 
  margin-top: 60px;
  flex-wrap: wrap;
  justify-content: center;
  min-width: 100%;
  position: relative;
}
.card {
  display: flex;
  flex-direction: column;
  padding: 0 0 10px 0; 
  border: 2px solid #F0EBD8;
  font-family: 'Megrim', cursive;
}

.gif {
  margin-bottom: 5px;
}

.card h2 {
  margin: 0 10px;
  border-top: 1px solid #F0EBD8;
  font-family: 'Megrim', cursive;
  color: #F0EBD8 ;
  text-align: center;
  font-size: 2em;
}
.card p {
  font-family: 'Open Sans', sans-serif;
  margin: 0 10px;
  color: #F0EBD8 ;
  text-align: center;
  font-size: 1.5em;
}

`;
