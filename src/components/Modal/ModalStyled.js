import styled from 'styled-components';

export default styled.div`  

#modalTitle {
  font-size: 2.5em;
  color: #1D2D44;
  } 
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
  width: 80%;
  overflow-y: auto;
  background-color: #F0EBD8 ;
  box-shadow: 0 0 10px rgba(0,0,0,0.25);
  z-index: 101;
  padding: 40px;
}

`;
