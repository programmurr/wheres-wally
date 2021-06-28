import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import PhotoFrame from './PhotoFrame';
import ClickMenu from './ClickMenu';
import handleScroll from '../../utils/handleSroll';
import  { CharacterContext } from '../../contexts/characterContext';


function GameWindow(props) {

  const { handleAllFound } = props;

  const { characterState } = useContext(CharacterContext);

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

  useEffect(() => {
    if (
      characterState.Waldo.found
      && characterState.Odlaw.found
      && characterState.Whitebeard.found
    ) {
      handleAllFound();
    }
  }, [characterState, handleAllFound]);

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