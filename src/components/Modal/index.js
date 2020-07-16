import React, { forwardRef, useImperativeHandle } from 'react';

// == Import
import ModalStyled from './ModalStyled';

// == Composant
const Modal = forwardRef((props, ref) => {
  const [display, setDisplay] = React.useState(false);
  const open = () => {
    setDisplay(true);
  };
  const close = () => {
    setDisplay(false);
  };
  useImperativeHandle(ref, () => ({
    openModal: () => open(),
    close: () => close(),
  }));

  if (display) {
    return (
      <ModalStyled>
        <div className="modal-wrapper">
          <div className="modal-backdrop" />
          <div className="modal-box">
            {props.children}
          </div>
        </div>
      </ModalStyled>
    );
  }
  return null;
});

// == Export
export default Modal;
