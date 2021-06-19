import React, { useEffect } from 'react';
import PhotoFrame from './PhotoFrame';
import handleScroll from '../../utils/handleSroll';

// Figure out how to make NavBar sticky without the extra classes in 
//  index.css
function GameWindow() {

  useEffect(() => {
    const navBar = document.getElementById('NavContainer');
    const gameWindow = document.getElementById('GameWindow');
    const sticky = navBar.offsetTop;
    window.onscroll = () => {
      handleScroll(navBar, gameWindow, sticky);
    }
  })

  return (
    <div id="GameWindow">
      <PhotoFrame />
    </div>
  )
}

export default GameWindow;