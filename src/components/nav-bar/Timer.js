import React, { useEffect, useState } from 'react';

// TODO: Pass time state up to App so it can be used in Leaderboard
function Timer() {
  const [ secondsLabel, setSecondsLabel ] = useState('00');
  const [ minutesLabel, setMinutesLabel ] = useState('00');
  const [ totalSeconds, setTotalSeconds ] = useState(0);

  const pad = (time) => {
    let timeString = time + "";
    if (timeString.length < 2) {
      return '0' + timeString;
    } else {
      return timeString;
    }
  }

  useEffect(() => {
    let interval = setInterval(() => {
      const newTotal = totalSeconds + 1;
      const newSecondsLabel = pad(newTotal % 60);
      const newMinutesLabel = pad(parseInt(newTotal / 60));
      setSecondsLabel(newSecondsLabel);
      setMinutesLabel(newMinutesLabel);
      setTotalSeconds(parseInt(newTotal));
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div>
      <p>{minutesLabel}:{secondsLabel}</p>
    </div>
  )
}

export default Timer;