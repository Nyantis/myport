import styled, { createGlobalStyle } from 'styled-components';
import Home from './pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ToLu from './pages/toLu';
import ToGabi from './pages/toGabi';

function App() {
  return (
    <MyApp>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/tolu' element={<ToLu/>} />
          <Route path='/togabi' element={<ToGabi/>} />
        </Routes>
      </BrowserRouter>
    </MyApp>
  );
}

export default App;

const MyApp = styled.div`
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
`;

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;