import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { db } from '../../firebase';
import PostScore from './PostScore';

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

// TODO: Lift PostScore 'active' state up to Scoreboard like the ClickMenu
// So that users can also click away to close it
function Scoreboard() {

  const [ expand, setExpand ] = useState(false);
  const [ times, setTimes ] = useState([]);
  const [ scoreUpdated, setScoredUpdated ] = useState(false);

  const parseTime = (time) => {
    let minutes = Math.floor(time/60);
    let seconds = time % 60;
    if (minutes === 1) {
      minutes = '1 minute';
    } else {
      minutes = `${minutes} minutes`;
    }
    if (seconds === 1) {
      seconds = '1 second';
    } else {
      seconds = `${seconds} seconds`;
    }
    return `${minutes} ${seconds}`;
  }

  const handleScoreUpdated = () => {
    setScoredUpdated(updated => !updated);
  }

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

  useEffect(() => {
    let times = [];
    db.collection('leaderboard').get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          times.push(doc.data());  
        })
      })
      .then(() => {
        const formattedTimes = Array.from(times)
          .sort((a, b) => {
            return a.time - b.time;
          })
          .map((entry) => {
            return {...entry, time: parseTime(entry.time)};
          });
        setTimes(formattedTimes);
      });
  }, [scoreUpdated])

  return (
    <ScoreboardContainer expand={expand}>
      <HeaderContainer>
        <ScoreHeader>Scoreboard</ScoreHeader>
      </HeaderContainer>
      <ScoreListContainer>
        <ScoreList>
          {times.map((data, index) => (
            <ScoreListItem key={data.name + index}>
              {data.name}: {data.time}
            </ScoreListItem>
          ))}
        </ScoreList>
      </ScoreListContainer>
      <PostScore scoreUpdated={handleScoreUpdated}/>
    </ScoreboardContainer>
  )
}

export default Scoreboard;