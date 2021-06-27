import React, { useEffect, useState } from 'react';

function Timer() {
  const [ time, setTime ] = useState(0)

  useEffect(() => {
    let interval = setInterval(() => {
      setTime(time + 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div>
      {time} seconds
    </div>
  )
}

export default Timer;