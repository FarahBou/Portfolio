// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';

// == Import
import FieldStyled from './FieldStyled';

// == Composant
const FieldTA = ({
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
        <textarea
          className="input"
          style={{ height: '150px' }}
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
        <textarea
          className="input"
          style={{ height: '75px' }}
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

FieldTA.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

FieldTA.defaultProps = {
  value: '',
};

// == Export
export default FieldTA;
