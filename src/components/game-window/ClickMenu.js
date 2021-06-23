import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Odlaw from '../../img/odlaw.jpg';
import Waldo from '../../img/waldo.jpg';
import Whitebeard from '../../img/whitebeard.jpeg';

const ClickMenuContainer = styled.div`
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid black;
  border-radius: 5px;
  max-width: 10%;
  min-width: 192px;
  &.hidden {
    display: none;
  }
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

function ClickMenu() {

    return (
      <ClickMenuContainer>
        <MenuList  className="hidden" id="ClickMenuList">
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

MenuListItem.propTypes = {
  id: PropTypes.string
}

MenuListImg.propTypes = {
  src: PropTypes.string
}

export default ClickMenu;