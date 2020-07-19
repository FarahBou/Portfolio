import styled from 'styled-components';

export default styled.div`  

.modal-wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(0,0,0,0.5);
}
.modal-box {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 70%;
  max-height: 77vh;
  width: 80%;
  overflow-y: auto;
  background-color: #F0EBD8 ;
  box-shadow: 0 0 10px rgba(0,0,0,0.25);
  z-index: 101;
  padding: 40px;
  display: flex;
  flex-direction: column;
}

p {
  margin-bottom: 1em;
}

.picture {
  width: 80%;
  align-self: center;
}

#modalTitle {
  font-size: 2.5em;
  color: #1D2D44;    
  margin: -90px 0 76px;
  border-bottom: 1px solid #1D2D44;
} 

#summary {
  margin: 5px;
  font-size: 1.3em;
  font-family: 'Open Sans', sans-serif;
}

#technos {
  margin: 5px;
  font-size: 1.3em;
  font-family: 'Open Sans', sans-serif;
}

#roles {
  margin: 5px;
  font-size: 1.3em;
  font-family: 'Open Sans', sans-serif;
}

#icon {
  margin: 5px;
  font-size: 1.3em;
  font-family: 'Open Sans', sans-serif;
  height:44px;
  margin: 0 0 -16px 5px;
}

#button {
  font-family: 'Megrim', cursive;
  align-self: flex-end;
  padding: 7px 10px;
  margin-top: 30px;
}

@media only screen and (max-width: 600px){ 
  #modalTitle {
    font-size: 2em;
  } 

  .modal-box {
    padding: 20px;
  }

  #summary {
    font-size: 1em;
  }

  #technos {
    font-size: 1em;
  }

  #roles {
    font-size: 1em;
  }

  #icon {
    height: 32px;
    font-size: 1em;
    margin: 0 0 -11px 5px;
  }

  #button {
    font-size: 1em;
  }
}

@media only screen and (max-width: 400px){ 
  #modalTitle {
    font-size: 1.5em;
  } 
  
  #summary {
    font-size: 0.8em;
  }

  #technos {
    font-size: 0.8em;
  }

  #roles {
    font-size: 0.8em;
  }

  #icon {
    height: 32px;
    font-size: 0.8em;
  }

  #button {
    padding: 5px 10px;
    font-size: 0.8em;
  }
}

`;
