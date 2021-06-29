import React from 'react';
import styled from 'styled-components';

const RestartButton = styled.button`
  border: 1px solid black;
  padding: 5px 10px 5px 10px;
  border-radius: 5px;
`;

// TODO: Actually make this work
function Restart() {

  const handleRestart = () => {
    // if (confirm("Are you sure you want to restart?")) {
    //   location.reload();
    // }
    alert("Restarted!")
  }

  return (
    <RestartButton onClick={handleRestart}>Restart</RestartButton>
  );
}

export default Restart;