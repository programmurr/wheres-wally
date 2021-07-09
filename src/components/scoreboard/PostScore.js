import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Filter from 'bad-words';
import useFormInput from '../../utils/useFormInput';
import { TimeContext } from '../../contexts/timeContext';
import { db } from '../../firebase';

const MyModal = styled.div`
  display: ${props => props.active ? "block" : "none"};
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0, 0.4);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`;

const CloseModal = styled.span`
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  &:hover {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;

const ModalInput = styled.input`
  border: 1px solid black;
`;

function PostScore() {

  const { timeState } = useContext(TimeContext);

  const [ modalActive, setModalActive ] = useState(true);
  const username = useFormInput("");

  const handleClose = () => {
    setModalActive(active => !active);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const filter = new Filter();
    const filteredName = filter.clean(username.value);
    db.collection("leaderboard").add({
      name: filteredName,
      time: timeState.totalSeconds
    })
    .catch((error) => {
      console.error("Error posting time: ", error);
    });
    setModalActive(active => !active);
  }

  return (
    <MyModal active={modalActive}>
      <ModalContent>
        <CloseModal onClick={handleClose}>&times;</CloseModal>
        <p>Type in your name and submit your score to the Scoreboard!</p>
        <p>Your time: {timeState.minutes}:{timeState.seconds}</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Enter your name:</label>
          <ModalInput 
            type="text" 
            name="username"
            required="required"
            maxLength="30"
            value={username.value}
            onChange={username.onChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </ModalContent>
    </MyModal>
  );
}

export default PostScore;

