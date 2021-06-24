import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

  const { id, src, character } = props;

  const handleClick = (event) => {
    // Pass the mouse position on up so the position can check if
    // it is near the correct character
    console.log("Character: ", character);
    console.log("Event: ", event);
  }

  return (
    <MenuItemContainer id={id} onClick={handleClick}>
        <MenuImg src={src} />
        <MenuText>
          {character}
        </MenuText>
    </MenuItemContainer>
  )
}

MenuItem.propTypes = {
  id: PropTypes.string,
  src: PropTypes.string,
  character: PropTypes.string
}

MenuImg.propTypes = {
  src: PropTypes.string
}

export default MenuItem;
