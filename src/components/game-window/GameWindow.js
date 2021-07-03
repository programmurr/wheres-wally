import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PhotoFrame from './PhotoFrame';
import ClickMenu from './ClickMenu';
import  { CharacterContext } from '../../contexts/characterContext';
import { TimeContext } from '../../contexts/timeContext';
import handleScroll from '../../utils/handleScroll';

const GameWindowContainer = styled.div`
  margin-top: ${props => props.expand ? "7vh" : ""};
`;


function GameWindow(props) {

  const { handleAllFound } = props;

  const { characterState } = useContext(CharacterContext);
  const { setTimeState } = useContext(TimeContext);

  const [ active, setActive ] = useState(false);
  const [ mouseX, setMouseX ] = useState(0);
  const [ mouseY, setMouseY ] = useState(0);
  const [ expand, setExpand ] = useState(false);

  // const checkGameOver = () => {

  // }

  // React is crying about this but it seems to work fine
  useEffect(() => {
    let isMounted = true;
    handleScroll(isMounted, setExpand);
    return () => { isMounted = false };
  })

  // Is two useEffects bad?
  useEffect(() => {
    if (
      characterState.Waldo.found
      && characterState.Odlaw.found
      && characterState.Whitebeard.found
    ) {
      if (window.confirm("All characters found! Click here to go to the leaderboard!")) {
        setTimeState(prevTime => ({ ...prevTime, frozen: true }));
        handleAllFound();
      } else {
        // If they don't want to visit the leaderboard
        window.location.reload();
      }
    }
  });

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