import styled from 'styled-components';

export default styled.div`  

.card {
  margin: 20px;
  display: flex;
  flex-direction: column;
  font-family: 'Megrim', cursive;
}

.card h2 {
  opacity: 0;
  border-top: 1px solid #F0EBD8;
  font-family: 'Megrim', cursive;
  color: #F0EBD8 ;
  text-align: center;
  font-size: 2em;
  margin-top: 20px;
}
@media (hover: none) and (pointer:coarse){
  .card h2 {
    opacity: 1;
  }
}
.card:hover h2 {
  opacity: 1;
}

@media only screen and (max-width: 700px){ 

  .card h2 {
    font-size: 1em;
  margin-top: 15px;
  }
  .gif {
    max-height: 100%;
    max-width: 100%;
  }
}

`;
