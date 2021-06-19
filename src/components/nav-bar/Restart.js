import React from 'react';
import styled from 'styled-components';

const RestartButton = styled.button`
  border: 1px solid black;
  padding: 5px 10px 5px 10px;
  border-radius: 5px;
`;


function Restart() {

  const handleRestart = () => {
    alert('Restarted!');
  }

  return (
    <RestartButton onClick={handleRestart}>Restart</RestartButton>
  );
}

export default Restart;