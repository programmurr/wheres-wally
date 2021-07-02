import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

const ScoreboardContainer = styled.div`
  margin-top: ${props => props.expand ? "7vh" : ""};
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1vh 0 1vh 0;
`;

const ScoreHeader = styled.h2``;

const ScoreListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ScoreList = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ScoreListItem = styled.li`
  margin-top: 1vh;
`;

function Scoreboard() {

  const [ expand, setExpand ] = useState(false);

  // Delete after firebase fetch is set up
  const sampleData  = [
    {
      name: "Object One",
      time: 250
    },
    {
      name: "Object Two",
      time: 150
    },
    {
      name: "Object Three",
      time: 605
    },
    {
      name: "Object Four",
      time: 75
    },
    {
      name: "Object Five",
      time: 800
    }
  ];

  const parseTime = (time) => {
    let minutes = Math.floor(time/60);
    let seconds = time % 60;
    if ( minutes === 1) {
      minutes = '1 minute';
    } else {
      minutes = `${minutes} minutes`;
    }
    const string = `${minutes} ${seconds} seconds`;
    return string;
  }

  const transformTimes = useMemo(() => {
    const times = Array.from(sampleData)
      .sort((a, b) => {
        return a.time - b.time;
      })
      .map((entry) => {
        return {...entry, time: parseTime(entry.time)};
      });
    return times;
  }, [sampleData])

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
    <ScoreboardContainer expand={expand}>
      <HeaderContainer>
        <ScoreHeader>Scoreboard</ScoreHeader>
      </HeaderContainer>
      <ScoreListContainer>
        <ScoreList>
          {transformTimes.map((data, index) => (
            <ScoreListItem key={data.name + index}>
              {data.name}: {data.time}
            </ScoreListItem>
          ))}
        </ScoreList>
      </ScoreListContainer>
    </ScoreboardContainer>
  )
}

export default Scoreboard;