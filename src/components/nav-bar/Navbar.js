import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import Characters from './Characters';
import Title from './Title';
import Timer from './Timer';
import Restart from './Restart';

const NavContainer = styled.div`
  height: 7vh;
  min-height: 55px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid black;
  background-color: #ffffff;
  width: 100vw;
`;

function Navbar(props) {

  return (
    <NavContainer id="NavContainer">
      <Characters/>
      <Title />
      <Timer />
      <Restart />
    </NavContainer>
  )
}


export default Navbar;
