import React, { useState } from 'react';
import { Input, Dropdown } from 'semantic-ui-react';
import { Card, Image } from 'semantic-ui-react';

// == Import
import PortfolioStyled from './MoviesStyled';
import SearchBar from './SearchBar/SearchBar';
import movies from '../../data/movies';

// == Composant
const Portfolio = (
  sendName,
  sendGenres,
  inputValue,
  ) => {
  const [ moviesTitles, setMoviesTitles ] = useState(movies);

  const handleChange = (evt) => {
    const moviesInput = evt.target.value.length > 0
    ? movies.filter((movie) => movie.name.includes(evt.target.value))
    : movies
    setMoviesTitles(moviesInput);
  };

  const handleChangeDropdown = (evt, { value }) => {
    const moviesInput = value.length > 0
    ? movies.filter((movie) => value.every((genre) => movie.categories.some((category) => category.includes(genre))))
    : movies
    setMoviesTitles(moviesInput);
  };

return (
  <PortfolioStyled>
    <div id="body">
      <SearchBar
      id="header"
      handleChange={handleChange}
      handleChangeDropdown={handleChangeDropdown}
      inputValue={inputValue}
      />
      <h1>Movies</h1>
    </div>
      <div className="cards">
        { (moviesTitles.length > 0)
        && moviesTitles.map((movie) => (
            <img
              style={{maxHeight: '20rem', margin: '1rem'}}
              src={movie.url}
            />
        ))}
      </div>  
  </PortfolioStyled>
)};


// == Export
export default Portfolio;
