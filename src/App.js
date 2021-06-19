import styled from 'styled-components';
import Navbar from './components/nav-bar/Navbar';

const GlobalStyles = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  line-height: 1;
  height: 100vh;
  width: 100vw;
`;


function App() {
  
  return (
    <GlobalStyles>
      <Navbar />
    </GlobalStyles>
  );
}

export default App;
