import styled from 'styled-components';

export default styled.div`  
min-height: 100vh;
background: linear-gradient(#1D2D44, #38040E);
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
  display: flex;
  flex-direction: row; 
  margin-top: 80px;
  flex-wrap: wrap;
  justify-content: center;
}

#box img{
  height: 96px;
  margin: 40px;
}

h2 {
  font-family: 'Open Sans', sans-serif;
  color: #F0EBD8;
  font-size: 2em;
  margin: 40px 40px;
}

#work {
  display: flex;
  flex-direction: row; 
  flex-wrap: wrap;
}

#work img{
  height: 96px;
}

`;
