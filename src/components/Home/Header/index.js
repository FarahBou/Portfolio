// == Import npm
import React from 'react';

// == Import
import MUTE from 'src/assets/mute.png';
import PLAY from 'src/assets/play.png';
import Music from 'src/assets/music.mp3';
import HeaderStyled from './HeaderStyled';

// == Composant
const Header = () => {

  const audio = new Audio(Music);

  const handleClickMute = () => {
    document.querySelector('#mute').style.zIndex = 0;
    document.querySelector('#play').style.zIndex = 1;
    audio.pause();
    audio.currentTime = 0;
  };
  const handleClickPlay = () => {
    document.querySelector('#play').style.zIndex = 0;
    document.querySelector('#mute').style.zIndex = 1;
    audio.play();
  };

  return (
    <HeaderStyled>
      <img src={MUTE} id="mute" alt="mute" onClick={handleClickMute} />
      <img src={PLAY} id="play" alt="play" onClick={handleClickPlay} />
    </HeaderStyled>
  );
};

// == Export
export default Header;
