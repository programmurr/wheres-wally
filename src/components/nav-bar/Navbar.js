import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Characters from './Characters';
import Title from './Title';
import Timer from './Timer';
import Restart from './Restart';
import handleScroll from '../../utils/handleScroll';

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
  position: ${props => props.stickyStatus ? "fixed" : ""};
  top: ${props => props.stickyStatus ? "0" : ""};
  left: ${props => props.stickyStatus ? "0" : ""};
`;

function Navbar(props) {
  const [ stickyStatus, setStickyStatus ] = useState(false);

  useEffect(() => {
    let isMounted = true;
    handleScroll(isMounted, setStickyStatus);
    return () => { isMounted = false };
  })

  const handleRestart = () => {
    props.handleReset();
  }

  return (
    <NavContainer id="NavContainer" stickyStatus={stickyStatus}>
      <Characters/>
      <Title />
      <Timer />
      <Restart resetFound={handleRestart}/>
    </NavContainer>
  )
}


export default Navbar;
