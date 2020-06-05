import styled from 'styled-components';

export default styled.div`  
min-height: 100vh;
background: linear-gradient(#0D1321, #250902);
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

#box {
  margin-top: 80px;
}

.profil {
  background-repeat : no-repeat;
  background-position: center;
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
  margin: 0 30px 10px 30px;
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

`;
