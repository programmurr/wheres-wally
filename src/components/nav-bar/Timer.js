import React, { useContext, useEffect } from 'react';
import { TimeContext } from '../../contexts/timeContext';

function Timer() {
  const { timeState, setTimeState } = useContext(TimeContext);

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
      const newTotal = timeState.totalSeconds + 1;
      const newSecondsLabel = pad(newTotal % 60);
      const newMinutesLabel = pad(parseInt(newTotal / 60));
      setTimeState({
        seconds: newSecondsLabel,
        minutes: newMinutesLabel,
        totalSeconds: parseInt(newTotal)
      })
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="Timer">
      <p>{timeState.minutes}:{timeState.seconds}</p>
    </div>
  )
}

export default Timer;