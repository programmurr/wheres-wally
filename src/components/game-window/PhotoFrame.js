import React from 'react';
import styled from 'styled-components';
import BeachScene from '../../img/wheres-wally-beach-smaller.jpg';

const PhotoContainer = styled.div`
  display: grid;
  justify-items: center;
`;

function PhotoFrame() {

  const handleClick = (event) => {
    // console.log("Mouse X Coord: ", event.pageX);
    // console.log("Mouse Y Coord: ", event.pageY);
    const rect = event.target.getBoundingClientRect();
    console.log(rect);
  }
  
  return (
    <PhotoContainer className="PhotoFrame">
      <img src={BeachScene} onClick={handleClick}/>
    </PhotoContainer>
  )
}

export default PhotoFrame;