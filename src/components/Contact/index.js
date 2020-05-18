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
  firstname, email, message, error, status, changeField, handleContact,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleContact();
  };

  const firstnameE = '';
  const emailE = '';
  const messageE = '';

  return (
    <ContactStyled>
      <Header id="header" slug="Contact" />
      <h1>Contact</h1>
      <form className="formDesktop" onSubmit={handleSubmit}>
        <Field
          value={firstname}
          onChange={changeField}
          placeholder="Nom"
          name="firstname"
          type="text"
        />
        {(firstnameE.length > 0)
          && <p style={{ color: 'red' }}>{firstnameE}</p>}
        <Field
          value={email}
          onChange={changeField}
          placeholder="Email"
          name="email"
          type="email"
        />
        {(emailE.length > 0)
          && <p style={{ color: 'red' }}>{emailE}</p>}
        <FieldTA
          value={message}
          onChange={changeField}
          placeholder="Message"
          name="message"
          type="text"
        />
        {(messageE.length > 0)
          && <p style={{ color: 'red' }}>{messageE}</p>}

        <div className="actionsDesktop">
          {(status > 0)
          && <p style={{ color: 'green' }}>Le message a bien été envoyé</p>}
          <Button
            inverted
            color="pink"
            type="submit"
            className="button"
          >
            Envoyer
          </Button>
        </div>
      </form>
    </ContactStyled>

  );
};

Contact.propTypes = {
  error: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleContact: PropTypes.func.isRequired,
};


// == Export
export default Contact;
