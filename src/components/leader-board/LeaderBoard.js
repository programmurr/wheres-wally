import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const LeaderBoardContainer = styled.div`
  margin-top: ${props => props.expand ? "7vh" : ""};
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1vh 0 1vh 0;
`;

const LeaderHeader = styled.h2``;

const LeaderListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LeaderList = styled.ol``;

function LeaderBoard() {

  const [ expand, setExpand ] = useState(false);

  // Delete after firebase fetch is set up
  const sampleData = [
    {
      name: "Object One",
      time: "04:10"
    },
    {
      name: "Object Two",
      time: "02:30"
    },
    {
      name: "Object Three",
      time: "10:05"
    }
  ]

  // For sticky nav
  useEffect(() => {
    let isMounted = true;
    const nav = document.getElementById('NavContainer');
    const sticky = nav.offsetTop;
    document.addEventListener('scroll', () => {
      if (window.pageYOffset > sticky || window.pageXOffset > 0) {
        if (isMounted) setExpand(true);
      } else {
        if (isMounted) setExpand(false);
      }
    })
    return () => { isMounted = false };
  })

  return (
    <LeaderBoardContainer expand={expand}>
      <HeaderContainer>
        <LeaderHeader>Leaderboard</LeaderHeader>
      </HeaderContainer>
      <LeaderListContainer>
        <LeaderList></LeaderList>
      </LeaderListContainer>
    </LeaderBoardContainer>
  )
}

export default LeaderBoard;