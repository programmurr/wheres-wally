import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/nav-bar/Navbar';
import GameWindow from './components/game-window/GameWindow';
import LeaderBoard from './components/leader-board/LeaderBoard';
import CharacterContextProvider from './contexts/characterContext';
import TimeContextProvider from './contexts/timeContext';

const GlobalStyles = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  line-height: 1;
  height: 100vh;
  width: 100vw;
`;

function App() {

  const [ allFound, setAllFound ] = useState(false);

  const handleAllFound = () => {
    setAllFound(true);
  }

  useEffect(() => {
    if (allFound) {
      alert("All characters found! Click here to go to the leaderboard!");
    }
  })

  return (
    <GlobalStyles>
      <Router>
        <CharacterContextProvider>
          <TimeContextProvider>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <GameWindow handleAllFound={handleAllFound}/>
              </Route>
              <Route path="/leaderboard">
                <LeaderBoard />
              </Route>
            </Switch>
          </TimeContextProvider>
        </CharacterContextProvider>
      </Router>
    </GlobalStyles>
  );
}

export default App;
