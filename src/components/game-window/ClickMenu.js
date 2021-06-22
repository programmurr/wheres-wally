import React from 'react';
import styled from 'styled-components';
import Odlaw from '../../img/odlaw.jpg';
import Waldo from '../../img/waldo.jpg';
import Whitebeard from '../../img/whitebeard.jpeg';

const ClickMenuContainer = styled.div``;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 15%;
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
  font-weight: bold;
`;

const MenuListImg = styled.img`
  max-width: 30px;
  max-height: 30px;
`;

function ClickMenu() {
  return (
    <ClickMenuContainer>
      <MenuList>
        <MenuListItem id="WaldoItem">
          <MenuListImg src={Waldo} />
          <MenuListText>
            Waldo
          </MenuListText>
        </MenuListItem>
        <MenuListItem>
          <MenuListImg src={Odlaw} />
          <MenuListText>
            Odlaw
          </MenuListText>
        </MenuListItem>
        <MenuListItem>
          <MenuListImg src={Whitebeard} />
          <MenuListText>
            Whitebeard
          </MenuListText>
        </MenuListItem>
      </MenuList>
    </ClickMenuContainer>
  )
}

export default ClickMenu;