import React from 'react';
import styled from 'styled-components';
import BeachScene from '../../img/wheres-wally-beach-smaller.jpg';

const PhotoContainer = styled.div`
  display: grid;
  justify-items: center;
`;

function PhotoFrame(props) {

  const handleClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    props.handleClick(x, y);
  }
  
  return (
    <PhotoContainer className="PhotoFrame">
      <img src={BeachScene} onClick={handleClick}/>
    </PhotoContainer>
  )
}

export default PhotoFrame;