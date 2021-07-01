import React, { useContext } from 'react';
import styled from 'styled-components';
import { TimeContext } from '../../contexts/timeContext';
import { CharacterContext } from '../../contexts/characterContext';


const RestartButton = styled.button`
  border: 1px solid black;
  padding: 5px 10px 5px 10px;
  border-radius: 5px;
  &:hover {
    p {
      -webkit-transform: scale(1.1);
    }
    cursor: pointer;
  }
`;

function Restart(props) {

  const { setTimeState } = useContext(TimeContext);
  const { setCharacterState } = useContext(CharacterContext);

  const handleRestart = async () => {
    if (window.confirm("Are you sure you want to restart?")) {
      await setTimeState({
        seconds: '00',
        minutes: '00',
        totalSeconds: 0,
        frozen: false
      });
      setCharacterState({
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
      props.resetFound();
    }
  }

  return (
    <RestartButton onClick={handleRestart}>
      <p>Restart</p>
    </RestartButton>
  );
}

export default Restart;