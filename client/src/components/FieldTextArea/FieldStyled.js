
import styled from 'styled-components';

export default styled.div`   
  margin: 1rem 0;
  .label {
    display: block;
    margin-bottom: 1rem;
    font-family: 'Megrim', cursive;
  }
  .input {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.3em;
    padding: 1rem 1rem;
    border-radius: 1rem;
    border: 2px solid #F0EBD8;
    width: 100%;
    color: black;
    &:focus {
      border-color: #748CAB;
    }
  }

  @media only screen and (max-width: 450px){
  
    .input {
      font-size: 1.2em;
      padding: 0.8rem 0.8rem;
      border-radius: 0.6rem;
  }
`;
