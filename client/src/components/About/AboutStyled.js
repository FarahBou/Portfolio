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
  font-weight: 100; 
}

.profil {
  margin-right: 30px;
  width: 20%;
  height: 10%;
  float: left;
}

p {
  margin-bottom: 1em;
}

#aboutMe {
  font-family: 'Open Sans', sans-serif;
  color: #F0EBD8 ;
  font-size: 1.5rem;
  text-align: left;
  margin: 80px 30px 10px;
  font-weight: normal;
  line-height: 1em;
}

#hobbies{
  text-align: center;
  vertical-align: middle;
  margin-bottom: 10px;
}

#icon {
  height: 32px;
  margin: 0 0 -4px 5px;
}

a { 
  color: inherit; 
} 

@media only screen and (max-width: 920px){
  h1{
    font-size: 3em;
  }

  #hobbies img{
    height: 52px;
  }
}

@media only screen and (max-width: 720px){
  h1{
    font-size: 2.5em;
  }

  #hobbies img{
    height: 42px;
  }
}

@media only screen and (max-width: 520px){
  h1{
    font-size: 2em;
    margin: 100px 15px 30px;
  }

  .profil {
    margin-right: 20px;
  }

  #hobbies img{
    height: 32px;
  }

  #aboutMe {
    font-size: 1.2rem;
    margin: 30px 30px 10px;
  }
}

@media only screen and (max-width: 400px){

  h1{
    font-size: 1.8em;
  }

  .profil {
    display: block;
    margin: 0 auto 20px;
    width: 85%;
    float: none;
  }

  #aboutMe {
    font-size: 1.1rem;
  }
}

`;
