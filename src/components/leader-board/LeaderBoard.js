import React, { useEffect } from 'react';
import handleScroll from '../../utils/handleSroll';

function LeaderBoard() {

  useEffect(() => {
    const navBar = document.getElementById('NavContainer');
    const gameWindow = document.getElementById('GameWindow');
    const sticky = navBar.offsetTop;
    window.onscroll = () => {
      handleScroll(navBar, gameWindow, sticky);
    }
  })

  return (
    <div id="LeaderBoard">Leaderboard</div>
  )
}

export default LeaderBoard;