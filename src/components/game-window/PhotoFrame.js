import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
    <PhotoContainer>
      <img src={BeachScene} onClick={handleClick} alt="Wheres Waldo Beach Scene"/>
    </PhotoContainer>
  )
}

PhotoFrame.propTypes = {
  handleClick: PropTypes.func
}

export default PhotoFrame;