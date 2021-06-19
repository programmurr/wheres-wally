import React from 'react';
import styled from 'styled-components';
import BeachScene from '../../img/wheres-wally-beach.jpg';

const WallyPhoto = styled.img`
  width: 100vw;
`;

function PhotoFrame() {
  return (
    <div className="PhotoFrame">
      <WallyPhoto src={BeachScene} />
    </div>
  )
}

export default PhotoFrame;