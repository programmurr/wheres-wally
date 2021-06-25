import React from 'react';
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

const GlobalStyles = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  line-height: 1;
  height: 100vh;
  width: 100vw;
`;

function App() {

  return (
    <GlobalStyles>
      <Router>
        <CharacterContextProvider>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <GameWindow />
            </Route>
            <Route path="/leaderboard">
              <LeaderBoard />
            </Route>
          </Switch>
        </CharacterContextProvider>
      </Router>
    </GlobalStyles>
  );
}

export default App;
