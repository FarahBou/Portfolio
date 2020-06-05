import styled from 'styled-components';

export default styled.div`  
min-height: 100vh;
background: linear-gradient(#0D1321, #250902);
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

.profil {
  margin-right: 30px;
  width: 30%;
  height: 20%;
  float: left;
}

#aboutMe {
  font-family: 'Open Sans', sans-serif;
  color: #F0EBD8 ;
  font-size: 1.5rem;
  line-height: 1.3em;
  text-align: left;
  margin: 80px 30px 10px 30px;
}

#hobbies{
  text-align: center;
  vertical-align: middle;
  margin: -10px 0 30px 30px;
}

#icon {
  height: 32px;
  margin: 0 0 -4px 5px;
}

a { 
  color: inherit; 
} 

@media only screen and (max-device-width: 920px){
  h1{
    font-size: 3em;
  }
}

@media only screen and (max-device-width: 720px){
  h1{
    font-size: 2.5em;
  }
}

@media only screen and (max-device-width: 520px){
  h1{
    font-size: 2em;
    padding: 90px 15px 0;
  }

  .profil {
    margin-right: 20px;
  }

  #aboutMe {
    font-size: 1.2rem;
    line-height: 1.1em;
    margin: 30px 30px 10px 30px;
  }
}

@media only screen and (max-device-width: 400px){

  .profil {
    display: block;
    margin: 0 auto 20px;
    width: 100%;
    float: none;
  }
}

`;
