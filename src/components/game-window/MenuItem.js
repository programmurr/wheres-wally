import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import  { CharacterContext } from '../../contexts/characterContext';

const MenuItemContainer = styled.div`
  display: flex;
  align-items: center;
  border-top: 2px solid black;
  border-left: 2px solid black;
  border-right: 2px solid black;
  &:hover {
    p {
      -webkit-transform: scale(1.1);
    }
    cursor: pointer;
  }
  border-top-left-radius: ${
    props => props.id === "waldo"
    ? "5px"
    : "0"
  };
  border-top-right-radius: ${
    props => props.id === "waldo"
    ? "5px"
    : "0"
  };
`;

const MenuText = styled.p`
  margin-left: 5px;
  font-weight: bold;
`;

const MenuImg = styled.img`
  max-width: 30px;
  max-height: 30px;
`;


function MenuItem(props) {

  const { 
    id, 
    src, 
    name,
    mouseX,
    mouseY
  } = props;

  const { characterState, setCharacterState } = useContext(CharacterContext);

  const hasBeenFound = (character, mouseX, mouseY) => {
    const leftBoundary = mouseX - 10;
    const rightBoundary = mouseX + 10;
    const topBoundary = mouseY - 10;
    const bottomBoundary = mouseY + 10;
    if (
      (character["left"] >= leftBoundary && character["left"] <= rightBoundary)
      &&  (character["top"] >= topBoundary && character["top"] <= bottomBoundary)
    ) {
      return true;
    }
    return false;
  }

  const handleClick = (mouseX, mouseY, charName) => {
    const character = characterState[charName];

    if (character.found) {
      alert("You already found this person!");
    } else if (hasBeenFound(character, mouseX, mouseY)) {
      setCharacterState(prevState => ({
        ...prevState,
        [charName]: {...prevState.charName, found: true}
      }))
    } else {
      alert("Put your glasses on!");
    }
  }

  return (
    <MenuItemContainer
      id={id} 
      onClick={() => handleClick(mouseX, mouseY, name)}
    >
        <MenuImg src={src} />
        <MenuText>
          {name}
        </MenuText>
    </MenuItemContainer>
  )
}

MenuItem.propTypes = {
  id: PropTypes.string,
  src: PropTypes.string,
  name: PropTypes.string,
  mouseX: PropTypes.number,
  mouseY: PropTypes.number,
}

MenuImg.propTypes = {
  src: PropTypes.string
}

export default MenuItem;
