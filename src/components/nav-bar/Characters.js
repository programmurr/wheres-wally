import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Odlaw from '../../img/odlaw.jpg';
import Waldo from '../../img/waldo.jpg';
import Whitebeard from '../../img/whitebeard.jpeg';

const CharacterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 10vw;
`;

// Add a prop to the styled component when found?
//   To change the opacity to 25%

const CharacterHead = styled.img`
  max-width: 50px;
  max-height: 50px;
`;

function Characters() {

  return (
    <CharacterContainer>
      <CharacterHead src={Waldo} />
      <CharacterHead src={Odlaw} />
      <CharacterHead src={Whitebeard} />
    </CharacterContainer>
  )
}

CharacterHead.propTypes = {
  src: PropTypes.string
}


export default Characters;