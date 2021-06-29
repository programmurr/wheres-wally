import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
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
  position: ${props => props.stickyStatus ? "fixed" : ""};
  top: ${props => props.stickyStatus ? "0" : ""};
`;

function Navbar() {

  const [ stickyStatus, setStickyStatus ] = useState(false);

  useEffect(() => {
    const nav = document.getElementById('NavContainer');
    const sticky = nav.offsetTop;
    document.addEventListener('scroll', () => {
      if (window.pageYOffset > sticky) {
        setStickyStatus(true);
      } else {
        setStickyStatus(false);
      }
    })
  })

  return (
    <NavContainer id="NavContainer" stickyStatus={stickyStatus}>
      <Characters/>
      <Title />
      <Timer />
      <Restart />
    </NavContainer>
  )
}


export default Navbar;
