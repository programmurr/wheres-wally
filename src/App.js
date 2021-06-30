import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
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

  const handleReset = () => {
    setAllFound(false);
  }

  return (
    <GlobalStyles>
      <Router>
        <CharacterContextProvider>
          <TimeContextProvider>
            <Navbar handleReset={handleReset}/>
            <Switch>
              <Route exact path="/">
                {
                  allFound 
                  ? <Redirect to="/leaderboard" /> 
                  : <GameWindow handleAllFound={handleAllFound}/>
                }
              </Route>
              <Route path="/leaderboard">
                {
                  !allFound 
                  ? <Redirect to="/" /> 
                  : <LeaderBoard />
                }
              </Route>
            </Switch>
          </TimeContextProvider>
        </CharacterContextProvider>
      </Router>
    </GlobalStyles>
  );
}

export default App;
