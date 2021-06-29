import React from 'react';
import styled from 'styled-components';

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

function Restart() {

  const handleRestart = () => {
    if (window.confirm("Are you sure you want to restart?")) {
      window.location.reload();
    }
  }

  return (
    <RestartButton onClick={handleRestart}>
      <p>Restart</p>
    </RestartButton>
  );
}

export default Restart;