import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import PhotoFrame from './PhotoFrame';
import ClickMenu from './ClickMenu';
import handleScroll from '../../utils/handleSroll';

function GameWindow() {

  useEffect(() => {
    const navBar = document.getElementById('NavContainer');
    const gameWindow = document.getElementById('GameWindow');
    const sticky = navBar.offsetTop;
    window.onscroll = () => {
      handleScroll(navBar, gameWindow, sticky);
    }
  })

  const handleClick = (x, y) => {
    alert('Left: ' + x + ' ; Top: ' + y)
  }

  return (
    <div id="GameWindow">
      <PhotoFrame handleClick={handleClick}/>
      <ClickMenu />
    </div>
  )
}

GameWindow.propTypes = {
  handleClick: PropTypes.func
}


export default GameWindow;