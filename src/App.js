import styled from 'styled-components';
import './App.css';
import { db } from './firebase';

const Para = styled.p`
  font-size: 1.5em;
`;

const StyledButton = styled.button`
  border-radius: 5px;
  font-size: 1rem;
`;

function App() {
  
  const post = () => {
    db.collection('test').add({
      name: 'Test',
      number: 1
    })
  }

  return (
    <div className="App">
      <Para> Where's prick?</Para>
      <StyledButton onClick={post}>Click moi</StyledButton>
    </div>
  );
}

export default App;
