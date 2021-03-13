import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Dropdown } from 'semantic-ui-react';
import MediaQuery from 'react-responsive';

// Import

// Options Table
import options from '../../../data/options';
import SearchBarStyled from './SearchBarStyled';

// Composant
const SearchBar = ({
  handleChange,
  handleChangeDropdown,
  inputValue,
}) => {

  return (
    <SearchBarStyled>
      <MediaQuery maxWidth={1000}>
        <div id="mobile">
          <Input
            style={{ minWidth: '202px' }}
            className="searchBar"
            size="large"
            icon={{
              name: 'search',
              circular: true,
              link: true,
            }}
            placeholder="Recherchez un film"
            value={inputValue}
            onChange={handleChange}
          />
          <Dropdown
            style={{
              minWidth: '202px',
              minHeight: '38px',
            }}
            className="dropdown"
            placeholder="Selectionnez vos genres"
            multiple
            search
            selection
            onChange={handleChangeDropdown}
            options={options}
          />
        </div>
      </MediaQuery>

      <MediaQuery minWidth={1001}>
        <div id="desktop">
          <Input
            style={{ minWidth: '302px' }}
            className="searchBar"
            size="large"
            icon={{
              name: 'search',
              circular: true,
              link: true,
            }}
            placeholder="Recherchez un film"
            value={inputValue}
            onChange={handleChange}
          />
          <Dropdown
            style={{
              minWidth: '302px',
              minHeight: '38px',
            }}
            className="dropdown"
            placeholder="Selectionnez vos genres"
            multiple
            search
            selection
            onChange={handleChangeDropdown}
            options={options}
          />
        </div>
      </MediaQuery>
    </SearchBarStyled>
  );
};

SearchBar.propTypes = {
  inputValue: PropTypes.string.isRequired,
};


// Export
export default SearchBar;
