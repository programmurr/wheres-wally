import React, { createContext, useState } from 'react';

export const CharacterContext = createContext();

const CharacterContextProvider = props => {
  const [ characterState, setCharacterState ] = useState({
    Waldo: {
      name: "Waldo",
      left: 1439,
      top: 505,
      found: false
    },
    Odlaw: {
      name: "Odlaw",
      left: 235,
      top: 474,
      found: false
    },
    Whitebeard: {
      name: "Whitebeard",
      left: 618,
      top: 474,
      found: false
    }
  });

  return <CharacterContext.Provider value={{ characterState, setCharacterState }}>{props.children}</CharacterContext.Provider>;
};

export default CharacterContextProvider;