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

h1 {
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
  margin-top: 60px;
  flex-wrap: wrap;
  justify-content: center;
}

#box img{
  height: 96px;
  margin: 40px;
}

.tooltip {
  position: relative;
  display: inline-block;
}

.text {
  visibility: hidden;
  width: 120px;
  color: #fff;
  text-align: center;
  border-radius: 6px;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  bottom: 1em;
  left: 2em;
}

.textWork {
  visibility: hidden;
  width: 120px;
  color: #fff;
  text-align: center;
  border-radius: 6px;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  left: -1em;
  bottom: -1em;
}

.tooltip:hover .text {
  visibility: visible;
}

.tooltip:hover .textWork {
  visibility: visible;
}

h2 {
  font-family: 'Open Sans', sans-serif;
  color: #F0EBD8;
  font-size: 2em;
  margin: 32px 40px;
}

#work {
  display: flex;
  flex-direction: row; 
  flex-wrap: wrap;
  padding: 0 10px 10px;
  margin: 20px;
}

#work img{
  height: 80px;
  margin: 15px 5px;
}

@media (hover: none) and (pointer:coarse) {
  .text {
    visibility: visible;
    bottom: 1em;
    left: 2em;
  }
  .textWork {
    visibility: visible;
    left: -1em;
    bottom: -1em;
  }
}

@media (hover: none) and (pointer:coarse) and (max-width: 770px){
  .text {
    visibility: visible;
    bottom: 1em;
    left: 1em;
  }
  .textWork {
    visibility: visible;
    left: -2.5em;
    bottom: -1em;
  }
}

@media (hover: none) and (pointer:coarse) and (max-width: 570px){
  .text {
    visibility: visible;
    bottom: 0.5em;
    left: -1em;
  }
  .textWork {
    visibility: visible;
    left: -3.5em;
    bottom: -1em;
    font-size: 0.8em;
  }
}

@media only screen and (max-width: 920px){

  #box {
    margin-top: 50px;
  }

  h2 {
    margin: 18px 40px;
  }

  #box img{
    height: 72px;
  }

  #work img{
    height: 60px;
  }
}

@media only screen and (max-width: 720px){
  h1{
    font-size: 2.5em;
  }

  #box {
    margin-top: 40px;
  }

  h2 {
    font-size: 1.5em;
    margin: 13px 40px;
  }

  #box img{
    margin: 20px;
    height: 52px;
  }

  #work img{
    height: 40px;
    padding-right: 10px;
  }

  #work {
    display: flex;
    flex-direction: row; 
    flex-wrap: wrap;
    justify-content: center;
  }
}


`;
