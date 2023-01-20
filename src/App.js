import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Card from './components/Card';
import Cards from './components/Cards.js';
import { EditCard } from './components/EditCard';
import styled from 'styled-components';

/*
Objectives
How to use Styled Components

*/

const Background = styled.div`
  background-color: #051749;
  color: palevioletred;
  text-align: center;
`

const CardS = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
`

function App() {
  return (
    <div className="App">
      <Background>
        Card App
        <Router>
          <Routes> 
            <Route path="/" element={<CardS><Cards/></CardS>}/>
            <Route path='/:id' element={<Card></Card>}/>
            <Route path='/:id/edit' element={<EditCard/>}/>
          </Routes>
        </Router>
      </Background>
      
    </div>
  );
}

export default App;
