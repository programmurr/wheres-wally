import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Odlaw from '../../img/odlaw.jpg';
import Waldo from '../../img/waldo.jpg';
import Whitebeard from '../../img/whitebeard.jpeg';
import  { CharacterContext } from '../../contexts/characterContext';


const CharacterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 10vw;
`;

const CharacterHead = styled.img`
  max-width: 50px;
  max-height: 50px;
  opacity: ${props => props.found ? "25%" : "100%"};
`;

function Characters() {
  const { characterState } = useContext(CharacterContext);

  return (
    <CharacterContainer>
      <CharacterHead src={Waldo} found={characterState.Waldo.found}/>
      <CharacterHead src={Odlaw} found={characterState.Odlaw.found}/>
      <CharacterHead src={Whitebeard} found={characterState.Whitebeard.found}/>
    </CharacterContainer>
  )
}

CharacterHead.propTypes = {
  src: PropTypes.string,
  found: PropTypes.bool
}


export default Characters;