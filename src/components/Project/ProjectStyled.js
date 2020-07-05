import styled from 'styled-components';

export default styled.div`  

.card {
  margin: 20px;
}

.card h2 {
  visibility: hidden;
  border-top: 1px solid #F0EBD8;
  font-family: 'Megrim', cursive;
  color: #F0EBD8 ;
  text-align: center;
  font-size: 2em;
}
@media (hover: none) and (pointer:coarse){
  .card h2 {
    visibility: visible;
  }
  .card {
    display: flex;
    flex-direction: column;
    font-family: 'Megrim', cursive;
  }
}
.card:hover {
  display: flex;
  flex-direction: column;
  font-family: 'Megrim', cursive;
}
.card:hover h2 {
  visibility: visible;
}

@media only screen and (max-width: 700px){ 

  .card h2 {
    font-size: 1em;
  }
  .gif {
    max-height: 100%;
    max-width: 100%;
  }
}

`;
