import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PhotoFrame from './PhotoFrame';
import ClickMenu from './ClickMenu';
import handleScroll from '../../utils/handleSroll';

function GameWindow() {

  const [ active, setActive ] = useState(false);
  const [ mouseX, setMouseX ] = useState('');
  const [ mouseY, setMouseY ] = useState('');


  // Maybe try triggering the ClickMenu with state/props instead
  //  of adding/removing className
  // If props = active: active styling
  // If props = hidden: hidden styling

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
  handleClick: PropTypes.func
}


export default GameWindow;