import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import characterInfo from '../../utils/characterInfo';

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
    mouseY,
  } = props;

  const handleClick = (event, mouseX, mouseY, name) => {
    const character = characterInfo.filter(
      info => info["name"] === name
    )[0]
    const x = parseInt(mouseX);
    const y = parseInt(mouseY);
    const leftBoundary = x - 10;
    const rightBoundary = x + 10;
    const topBoundary = y - 10;
    const bottomBoundary = y + 10;
    if (
      (character["left"] >= leftBoundary && character["left"] <= rightBoundary)
      &&  (character["top"] >= bottomBoundary && character["top"] <= topBoundary)
    ) {
      // change opacity
      // mark as found
    }
  }

  return (
    <MenuItemContainer
      id={id} 
      onClick={(e) => handleClick(e, mouseX, mouseY, name)}
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
  mouseX: PropTypes.string,
  mouseY: PropTypes.string
}

MenuImg.propTypes = {
  src: PropTypes.string
}

export default MenuItem;
