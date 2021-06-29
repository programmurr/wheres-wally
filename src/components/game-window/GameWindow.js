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
    const nav = document.getElementById('NavContainer');
    const sticky = nav.offsetTop;
    document.addEventListener('scroll', () => {
      if (window.pageYOffset > sticky) {
        setExpand(true);
      } else {
        setExpand(false);
      }
    })
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
      <GameWindowContainer expand={expand}>
        <PhotoFrame handleClick={handleClick}/>
        <ClickMenu 
          active={active}
          mouseX={mouseX}
          mouseY={mouseY}
        />
      </GameWindowContainer>
    )
}

GameWindow.propTypes = {
  handleAllFound: PropTypes.func,
}


export default GameWindow;