import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

// == Import

import Header from 'src/components/Header';
import Field from 'src/components/Field';
import FieldTA from 'src/components/FieldTextArea';
import ContactStyled from './ContactStyled';

// == Composant
const Contact = ({
  name, email, message, status, changeField, handleContact,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleContact();
  };
  const handleClick = (evt) => {
    evt.preventDefault();
    // eslint-disable-next-line no-console
    console.log('click');
    // eslint-disable-next-line no-alert
    alert('Veuillez écrire un message');
  };

  return (
    <ContactStyled>
      <Header id="header" slug="Contact" />
      <h1>Contact</h1>
      <form className="formDesktop" onSubmit={handleSubmit}>
        <Field
          value={name}
          onChange={changeField}
          placeholder="Nom"
          name="name"
          type="text"
        />
        <Field
          value={email}
          onChange={changeField}
          placeholder="Email"
          name="email"
          type="email"
        />
        <FieldTA
          value={message}
          onChange={changeField}
          placeholder="Message"
          name="message"
          type="text"
        />

        <div className="actionsDesktop">
          {(status === 'success')
            && (<p style={{ color: 'green', paddingBottom: '20px' }}>Le message a bien été envoyé</p>)}
          {(status === 'fail')
            && (<p style={{ color: 'red', paddingBottom: '20px' }}>Une erreur est survenue</p>)}
          {(message.length > 0)
            && (
            <Button
              inverted
              type="submit"
              className="button"
            >
              Envoyer
            </Button>
            )}
          {(message.length === 0)
            && (
            <Button
              inverted
              type="button"
              className="button"
              onClick={handleClick}
            >
              Envoyer
            </Button>
            )}
        </div>
      </form>
    </ContactStyled>

  );
};

Contact.propTypes = {
  status: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleContact: PropTypes.func.isRequired,
};


// == Export
export default Contact;
