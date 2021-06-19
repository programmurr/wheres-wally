import styled from 'styled-components';
import './App.css';

const Para = styled.p`
  font-size: 1.5em;
`;

const StyledButton = styled.button`
  border-radius: 5px;
  font-size: 1rem;
`;

function App() {
  

  return (
    <div className="App">
      <Para> Where's Wally?</Para>
    </div>
  );
}

export default App;
