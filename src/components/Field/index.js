// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';

// == Import
import FieldStyled from './FieldStyled';

// == Composant
const Field = ({
  value,
  onChange,
  placeholder,
  name,
  type,
}) => {
  const handleChange = (evt) => {
    // console.log(evt.target.value);
    onChange(evt.target.value, name);
  };

  return (
    <FieldStyled>
      <MediaQuery query="(min-width: 451px)">
        <label
          className="label"
          htmlFor={name}
          style={{ fontSize: '1.5em' }}
        >
          {placeholder}
        </label>
        <input
          className="input"
          style={{ height: '60px' }}
          placeholder={placeholder}
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
        />
      </MediaQuery>
      <MediaQuery query="(max-width: 450px)">
        <label
          className="label"
          htmlFor={name}
          style={{ fontSize: '1.2em' }}
        >
          {placeholder}
        </label>
        <input
          className="input"
          style={{ height: '40px' }}
          placeholder={placeholder}
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
        />
      </MediaQuery>
    </FieldStyled>
  );
};

Field.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

Field.defaultProps = {
  value: '',
};

// == Export
export default Field;
