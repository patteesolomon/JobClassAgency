import { useEffect, useState } from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Form from "./components/Form";
import { EditCard } from './components/EditCard';
import Create from "./components/CreateCard";
import styled from 'styled-components';
import Cards from "./components/Cards";
import Card from "./components/Card";
// import { getCard } from "./services/card-api";
//import {exec, spawn, execSync, spawnSync} from 'child_process';
/*
Objectives
How to use Styled Components

*/
const Background = styled.div`
  background-color: darkgreen;
  color: palegreen;
  text-align: center;
`

const CardS = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
`
function App() {
  

const apiKey = 'v8BN36osB5u4ETQwIlPmVM6HHEN3FH2MDZYxvowc5q8qcT9VuoRjVrPJ';

const [pic, setPic] = useState(null);

const [card, setCard] = useState(null);

//call the Card data
const callCard = async (search) =>{
  try{
    const responce = await fetch(`https://jcacards.onrender.com/${search}`);
    const data = await responce.json();
    setCard(data);
  }
  catch(e){
    console.error(e);
  }
};

//call the cards
const callCards = async (search) =>{
  try{
    const responce = await fetch(`https://jcacards.onrender.com/${search}`);
    const data = await responce.json();
    setCard(data);
  }
  catch(e){
    console.error(e);
  }
};

//ill keep picCall because I need 
// this thing for alot more
// being the picture data
const picCall = async (search, targetT, pageN) =>
{
  //page rand here
  pageN = 0; // zero for now
  try{
  const response = await fetch(`${apiKey} \ https://api.pexels.com/v1/${search}?query=${targetT}&per_page=${pageN}`);

  const data2 = await response.json();
    setPic(data2);
  } catch(e){
    console.error(e);
  }

};

// this thing here needs to wait for now
// till things work
const getPList = async (search, targetT, pageN) =>
{
  //page rand here
  pageN = 0; // zero for now
  targetT = 'carreer';
  try{
  const response = await fetch(`${apiKey} \ https://api.pexels.com/v1/${search}?query=${targetT}&per_page=${pageN}`);
//?auto=compress&cs=tinysrgb&h=350  ?
  const data2 = await response.json();
  setPic(data2);

  } catch (e){
    console.error(e);
  }
  
};

return (
    <div className="App">
      <Background>
        Job Class Agency App 
        <Router>
          <Routes> 
            <Route path="/" element={<Form cardsearch={callCards}></Form>}/>
            <Route path='/:id' element={<Form callCard ={callCard}/>}/>
            <Route path='/:id/edit' element={<EditCard/>}/>
            <Route path="/:id/create" element={<Create/>}></Route>
          </Routes>
        </Router>
      </Background>
    </div>
  );
}

export default App;