/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import Modal from 'src/components/Modal';
import ProjectStyled from './ProjectStyled';

// == Composant
function Project({ project }) {
  const modalRef = React.createRef();
  const openModal = () => {
    console.log('open modal');
    modalRef.current.openModal();
  };

  return (
    <ProjectStyled>
      <a
        className="card"
        onClick={openModal}
      >
        <img
          src={project.gif}
          className="gif"
          alt="gif2"
        />
        <h2>{project.title}</h2>
      </a>
      <Modal ref={modalRef}>
        <h1 id="modalTitle">{project.title}</h1>
        <button onClick={() => modalRef.current.close()}>
          Fermer
        </button>
      </Modal>
    </ProjectStyled>
  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired,
};

// == Export
export default Project;
