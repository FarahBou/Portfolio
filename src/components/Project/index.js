import React from 'react';
import PropTypes from 'prop-types';

// == Import
import Modal from 'src/components/Modal';
import ProjectStyled from './ProjectStyled';

// == Composant
const Project = ({ project }) => {
  const openModal = () => {
    console.log('open modal');
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
      <Modal project={project} />
    </ProjectStyled>
  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired,
};

// == Export
export default Project;
