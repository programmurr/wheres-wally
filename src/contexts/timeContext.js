import React, { createContext, useState } from 'react';

export const TimeContext = createContext();

const TimeContextProvider = props => {
   const [ timeState, setTimeState ] = useState({
     seconds: '00',
     minutes: '00',
     totalSeconds: 0
   });

   return <TimeContext.Provider value={{ timeState, setTimeState }}>{props.children}</TimeContext.Provider>
};

export default TimeContextProvider;