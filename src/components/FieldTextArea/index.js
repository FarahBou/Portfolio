// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

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
      <label
        className="label"
        htmlFor={name}
        style={{ fontSize: '1.5em' }}
      >
        {placeholder}
      </label>
      <textarea
        className="input"
        placeholder={placeholder}
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
      />
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
