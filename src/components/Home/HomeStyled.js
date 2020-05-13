import styled from 'styled-components';

export default styled.div`

display: flex;
flex-direction: row;
overflow: hidden;

.about {
  background-color: #250902;
}
.skills {
  background-color: #38040E;
}
.portfolio {
background-color: #640D14;
}
.contact {
    background-color: #800E13;
}

div {
  height: 100vh;
  width: 25%;
  transition: transform .3s;
}

div:hover {
  transform: scaleX(1.2);
}

.content {
  text-align: center;
  vertical-align: middle;
  line-height: 100vh; 
  color: #F0EBD8 ;
  font-size: 2em;
  font-family: "Rajdhani", cursive;
  opacity: 0;
  transition:5s;
}

.content:hover {
  opacity: 1;
  transform: scaleX(1.2);
  z-index: 2;
}
`;
