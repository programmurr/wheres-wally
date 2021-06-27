import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Odlaw from '../../img/odlaw.jpg';
import Waldo from '../../img/waldo.jpg';
import Whitebeard from '../../img/whitebeard.jpeg';
import MenuItem from './MenuItem';

// TODO: Eliminate box shadow for target row
const ClickMenuContainer = styled.div`
  max-width: 10%;
  min-width: 192px;
  display: ${props => props.active ? "": "none"};
  position: ${props => props.active ? "absolute" : ""};
  left: ${props => props.active ? `${props.mouseX - 13}px` : "0"};
  top: ${props => props.active ? `${props.mouseY + 54}px` : "0"};
  box-shadow: ${
    props => props.active
      ? "5px 5px 8px 2px #111111"
      : ""
  }
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid black;
  border-radius: 5px;
  background-color: #ffffff;
`;

const Target = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid red;
`;

function ClickMenu(props) {

  const  { active, mouseX, mouseY } = props;

    return (
      <ClickMenuContainer 
        active={active}
        mouseX={mouseX}
        mouseY={mouseY}
      >
      <Target active={active} />
        <MenuList>
          <MenuItem 
            id="waldo"
            src={Waldo}
            name="Waldo"
            mouseX={mouseX}
            mouseY={mouseY}
          />
          <MenuItem 
            id="odlaw"
            src={Odlaw}
            name="Odlaw"
            mouseX={mouseX}
            mouseY={mouseY}
          />
          <MenuItem 
            id="whitebeard"
            src={Whitebeard}
            name="Whitebeard"
            mouseX={mouseX}
            mouseY={mouseY}
          />
        </MenuList>
      </ClickMenuContainer>
    )
}

ClickMenu.propTypes = {
  active: PropTypes.bool,
  mouseX: PropTypes.number,
  mouseY: PropTypes.number
}

export default ClickMenu;