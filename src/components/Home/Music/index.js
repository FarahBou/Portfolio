// == Import npm
import React from 'react';

// == Import
import MUTE from 'src/assets/music/mute.png';
import PLAY from 'src/assets/music/play.png';
import Sound from 'src/assets/music/music.mp3';
import MusicStyled from './MusicStyled';

// == Composant
const Music = () => {
  const audio = new Audio(Sound);

  const handleClickMute = () => {
    document.querySelector('#mute').style.zIndex = -1;
    document.querySelector('#play').style.zIndex = 2;
    audio.play();
  };
  const handleClickPlay = () => {
    document.querySelector('#play').style.zIndex = -1;
    document.querySelector('#mute').style.zIndex = 2;
    audio.pause();
  };

  return (
    <MusicStyled>
      <img src={MUTE} id="mute" alt="mute" onClick={handleClickMute} />
      <img src={PLAY} id="play" alt="play" onClick={handleClickPlay} />
    </MusicStyled>
  );
};

// == Export
export default Music;
