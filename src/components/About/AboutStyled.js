import styled from 'styled-components';

export default styled.div`  
height: 100vh;
background: linear-gradient(#0D1321, #250902);

#header {
  z-index: 1;
}

h1{
  font-family: 'Megrim', cursive;
  color: #F0EBD8 ;
  text-align: center;
  font-size: 4em;
  padding-top: 110px;
  text-shadow: 1px 1px 3px black; 
}

.profil {
  background-repeat : no-repeat;
  background-position: center;
  width: 20%;
  margin: 80px 30px 30px 30px;
  position: fixed;
}

#aboutMe {
  position: absolute;
  top: 250px;
  right: 10%;
  font-family: 'Open Sans', sans-serif;
  color: #F0EBD8 ;
  font-size: 1.5rem;
  line-height: 1.3em;
  text-align: left;
  width: 62%;
  padding-bottom: 15px;
}

#aboutMe p{
  padding-bottom: 40px;
}

#hobbies{
  font-family: 'Open Sans', sans-serif;
  color: #F0EBD8 ;
  font-size: 1.5em;
  text-align: center;
  vertical-align: middle;
  padding-left: 30px;
}

`;
