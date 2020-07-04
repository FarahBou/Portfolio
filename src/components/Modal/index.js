import React from 'react';
import PropTypes from 'prop-types';

// == Import
import ModalStyled from './ModalStyled';

// == Composant
const Modal = ({ project }) => (
  <ModalStyled>
    <div className="modal-wrapper">
      <div className="modal-backdrop" />
      <div className="modal-box">
        <h1>{project.title}</h1>
      </div>
    </div>
  </ModalStyled>
);

Modal.propTypes = {
  project: PropTypes.object.isRequired,
};

// == Export
export default Modal;
