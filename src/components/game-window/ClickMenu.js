import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Odlaw from '../../img/odlaw.jpg';
import Waldo from '../../img/waldo.jpg';
import Whitebeard from '../../img/whitebeard.jpeg';

const ClickMenuContainer = styled.div`
  max-width: 10%;
  min-width: 192px;
  background-color: #ffffff;
  display: ${props => props.active ? "": "none"};
  position: ${props => props.active ? "absolute" : ""};
  left: ${props => props.active ? `${props.mouseX}px` : "0"};
  top: ${props => props.active ? `${props.mouseY + 65}px` : "0"};
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
`;

const MenuListItem = styled.div`
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
    props => props.id === "WaldoItem"
    ? "5px"
    : "0"
  };
  border-top-right-radius: ${
    props => props.id === "WaldoItem"
    ? "5px"
    : "0"
  };
`;

const MenuListText = styled.p`
  margin-left: 5px;
  font-weight: bold;
`;

const MenuListImg = styled.img`
  max-width: 30px;
  max-height: 30px;
`;

function ClickMenu(props) {

  const  { active, mouseX, mouseY } = props;


    return (
      <ClickMenuContainer 
        active={active}
        mouseX={mouseX}
        mouseY={mouseY}
      >
        <MenuList>
          <MenuListItem id="WaldoItem">
            <MenuListImg src={Waldo} />
            <MenuListText>
              Waldo
            </MenuListText>
          </MenuListItem>
          <MenuListItem id="OdlawItem">
            <MenuListImg src={Odlaw} />
            <MenuListText>
              Odlaw
            </MenuListText>
          </MenuListItem>
          <MenuListItem id="WhitebeardItem">
            <MenuListImg src={Whitebeard} />
            <MenuListText>
              Whitebeard
            </MenuListText>
          </MenuListItem>
        </MenuList>
      </ClickMenuContainer>
    )
}

ClickMenu.propTypes = {
  active: PropTypes.bool,
  mouseX: PropTypes.number,
  mouseY: PropTypes.number
}

MenuListItem.propTypes = {
  id: PropTypes.string
}

MenuListImg.propTypes = {
  src: PropTypes.string
}

export default ClickMenu;