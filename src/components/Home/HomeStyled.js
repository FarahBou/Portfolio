import styled from 'styled-components';

export default styled.div`

display: flex;
flex-direction: row;
overflow: hidden;

#music {
  z-index: 1;
}

.about {
  height: 100vh;
  width: 25%;
  transition: 4s;
  -webkit-filter: brightness(0.8);
  background: linear-gradient(#0D1321, #250902);
}
.skills {
  height: 100vh;
  width: 25%;
  transition: 4s;
  -webkit-filter: brightness(0.8);
  background: linear-gradient(#1D2D44, #38040E);
}
.portfolio {
  height: 100vh;
  width: 25%;
  transition: 4s;
  -webkit-filter: brightness(0.8);
  background: linear-gradient(#3E5C76, #640D14);
}
.contact {
  height: 100vh;
  width: 25%;
  transition: 4s;
  -webkit-filter: brightness(0.8);
  background: linear-gradient(#748CAB, #800E13);
}

div:hover {
  transform: scaleX(1.2);
  -webkit-filter: brightness(1);
}

.content {
  text-align: center;
  vertical-align: middle;
  line-height: 100vh; 
  color: #F0EBD8 ;
  font-size: 2em;
  font-family: 'Megrim', cursive;
  opacity: 0;
  transition:4s;
}

.content:hover {
  opacity: 1;
  transform: scaleX(1.2);
}

.night_about {
  position: relative;
  transform: rotateZ(45deg);
  opacity: 0;
}
.night_skills {
  position: relative;
  transform: rotateZ(45deg);
  opacity: 0;
}
.night_portfolio{
  position: relative;
  transform: rotateZ(45deg);
  opacity: 0;
}
.night_contact{
  position: relative;
  transform: rotateZ(45deg);
  opacity: 0;
}

.shooting_star {
  position: absolute;
  top: 25%;
  left: 50%;
  height: 2px;
  background: linear-gradient(-45deg, #5f91ff, rgba(0, 0, 255, 0));
  filter: drop-shadow(0 0 6px #699bff);
  animation: tail 3000ms ease-in-out infinite, shooting 3000ms ease-in-out infinite;
 
}

.shooting_star:hover::before, .shooting_star:hover::after {
  position: absolute;
  content: '';
  top: calc(25% - 1px);
  right: 0;
  height: 2px;
  background: linear-gradient(-45deg, rgba(0, 0, 255, 0), #5f91ff, rgba(0, 0, 255, 0));
  border-radius: 100%;
  transform: translateX(50%) rotateZ(45deg);
  animation: shining 3000ms ease-in-out infinite;
}

.shooting_star::after {
  transform: translateX(50%) rotateZ(-45deg);
}

.shooting_star:nth-child(1) {
  top: calc(50% - 600px);
  left: calc(50% - 500px);
  animation-delay: 650ms;
}
.shooting_star:nth-child(1)::before, .shooting_star:nth-child(1)::after {
  animation-delay: 650ms;
}

.shooting_star:nth-child(2) {
  top: calc(50% - 200px);
  left: calc(50% - 300px);
  animation-delay: 150ms;
}
.shooting_star:nth-child(2)::before, .shooting_star:nth-child(2)::after {
  animation-delay: 150ms;
}

.shooting_star:nth-child(3) {
  top: calc(50% - 300px);
  left: calc(50% - 200px);
  animation-delay: 1600ms;
}
.shooting_star:nth-child(3)::before, .shooting_star:nth-child(3)::after {
  animation-delay: 1600ms;
}

.shooting_star:nth-child(4) {
  top: calc(50% - 400px);
  left: calc(50% - 600px);
  animation-delay: 4700ms;
}
.shooting_star:nth-child(4)::before, .shooting_star:nth-child(4)::after {
  animation-delay: 4700ms;
}

.shooting_star:nth-child(5) {
  top: calc(50% - -30px);
  left: calc(50% - 200px);
  animation-delay: 2100ms;
}
.shooting_star:nth-child(5)::before, .shooting_star:nth-child(5)::after {
  animation-delay: 2100ms;
}


/* Animations */
@keyframes tail {
  0% {
    width: 0;
  }
  
  30% {
    width: 100px;
  }
  
  100% {
    width: 0;
  }
}

@keyframes shining {
  0% {
    width: 0;
  }
  50% {
    width: 30px;
  }
  100% {
    width: 0;
  }
}

@keyframes shooting {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(320px);
  }
}
`;
