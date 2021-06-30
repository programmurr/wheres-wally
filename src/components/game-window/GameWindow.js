import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PhotoFrame from './PhotoFrame';
import ClickMenu from './ClickMenu';
import  { CharacterContext } from '../../contexts/characterContext';

const GameWindowContainer = styled.div`
  margin-top: ${props => props.expand ? "7vh" : ""};
`;


function GameWindow(props) {

  const { handleAllFound } = props;

  const { characterState } = useContext(CharacterContext);

  const [ active, setActive ] = useState(false);
  const [ mouseX, setMouseX ] = useState(0);
  const [ mouseY, setMouseY ] = useState(0);
  const [ expand, setExpand ] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const nav = document.getElementById('NavContainer');
    const sticky = nav.offsetTop;
    document.addEventListener('scroll', () => {
      if (window.pageYOffset > sticky || window.pageXOffset > 0) {
        if (isMounted) setExpand(true);
      } else {
        if (isMounted) setExpand(false);
      }
    })
    return () => { isMounted = false };
  })

  useEffect(() => {
    if (
      characterState.Waldo.found
      && characterState.Odlaw.found
      && characterState.Whitebeard.found
    ) {
      if (window.confirm("All characters found! Click here to go to the leaderboard!")) {
        handleAllFound();
      } else {
        // If they don't want to visit the leaderboard
        window.location.reload();
      }
    }
  }, [characterState, handleAllFound]);

  const handleClick = (x, y) => {
    setMouseX(x);
    setMouseY(y);
    setActive(active => !active);
  }

  const hideMenu = () => {
    setActive(active => !active);
  }

    return (
      <GameWindowContainer expand={expand}>
        <PhotoFrame handleClick={handleClick}/>
        <ClickMenu 
          active={active}
          mouseX={mouseX}
          mouseY={mouseY}
          hideMenu={hideMenu}
        />
      </GameWindowContainer>
    )
}

GameWindow.propTypes = {
  handleAllFound: PropTypes.func,
}


export default GameWindow;