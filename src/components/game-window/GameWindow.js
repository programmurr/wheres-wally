import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PhotoFrame from './PhotoFrame';
import ClickMenu from './ClickMenu';
import handleScroll from '../../utils/handleSroll';

function GameWindow(props) {

  const { characterInfo } = props;

  const [ active, setActive ] = useState(false);
  const [ mouseX, setMouseX ] = useState(0);
  const [ mouseY, setMouseY ] = useState(0);

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
          characterInfo={characterInfo}
        />
      </div>
    )
}

GameWindow.propTypes = {
  handleClick: PropTypes.func,
  characterInfo: PropTypes.object
}


export default GameWindow;