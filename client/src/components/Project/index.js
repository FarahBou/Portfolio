/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

// == Import
import Modal from 'src/components/Modal';
import Github from 'src/assets/skills/icons8-github.svg';
import ProjectStyled from './ProjectStyled';

// == Composant
function Project({ project }) {
  const modalRef = React.createRef();
  const openModal = () => {
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
        <a
          href={project.url}
        >
          <h1 id="modalTitle">{project.title}</h1>
        </a>
        <img
          src={project.picture}
          className="picture"
          alt="project_picture"
        />
        <div id="summary">
          {project.summary.map((bloc) => <p>{bloc}</p>)}
        </div>
        <div id="technos">
          <p>Technos utilisées: {project.technos.map((techno) => <li>{techno}</li>)}
          </p>
        </div>
        <div id="roles">
          <p>Rôle: {project.roles.map((role) => <li>{role}</li>)}
          </p>
        </div>
        <div id="icon">
          Lien GitHub du projet:
          <a
            href={project.git}
          >
            <img id="icon" src={Github} alt="git" />
          </a>
        </div>
        <Button
          inverted
          type="button"
          id="button"
          style={{backgroundColor: '#1D2D44', color: "#F0EBD8"}}
          onClick={() => modalRef.current.close()}
        >
          Fermer
        </Button>
      </Modal>
    </ProjectStyled>
  );
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
};

// == Export
export default Project;
