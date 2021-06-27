import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PhotoFrame from './PhotoFrame';
import ClickMenu from './ClickMenu';
import handleScroll from '../../utils/handleSroll';

function GameWindow() {

  const [ active, setActive ] = useState(false);
  const [ mouseX, setMouseX ] = useState(0);
  const [ mouseY, setMouseY ] = useState(0);

  // TODO: Change this so it is more react-y
  // e.g. Use props and styled div instead of directly changing class
  useEffect(() => {
    const navBar = document.getElementById('NavContainer');
    const gameWindow = document.getElementById('GameWindow');
    const sticky = navBar.offsetTop;
    window.onscroll = () => {
      handleScroll(navBar, gameWindow, sticky);
    }
  })

  const handleClick = (x, y) => {
    setMouseX(x);
    setMouseY(y);
    setActive(active => !active);
  }

    return (
      <div id="GameWindow">
        <PhotoFrame handleClick={handleClick}/>
        <ClickMenu 
          active={active}
          mouseX={mouseX}
          mouseY={mouseY}
        />
      </div>
    )
}

GameWindow.propTypes = {
  handleClick: PropTypes.func,
  characterInfo: PropTypes.object
}


export default GameWindow;