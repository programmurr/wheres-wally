import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components';

const StyledPopup = styled(Popup)`
  &-content {
    border: 1px solid black;
  }
`;

function PostScore(props) {

  const [ open, setOpen ] = useState(true);
  const closeModal = () => setOpen(false);

  const samplePost = {
    name: "Sample Person",
    time: 125
  }

  return (
    <StyledPopup open={open} closeOnDocumentClick onClose={closeModal}>
        <p>Post yo time here!</p>
    </StyledPopup>
  );
}

export default PostScore;

