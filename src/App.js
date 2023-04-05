import { useState } from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, NavLink} from "react-router-dom";
import Form from "./components/Form";
//import { EditCard } from './components/EditCard';
//import Create from "./components/CreateCard";
import styled from 'styled-components';
import CardDisplay from "./components/cardDisplay";
import { getCard } from "./services/card-api";
// import {Clubs} from "./views/Clubs";
import {Contact} from "./views/Contact";
import {Userbase} from "./views/Userbase";
// import {Merch} from "./views/Merch";
/*
Objectives
How to use Styled Components
*/
const Background = styled.div`
  background-color: darkgreen;
  color: palegreen;
  text-align: center;
`

function App() {

const apiKey = 'v8BN36osB5u4ETQwIlPmVM6HHEN3FH2MDZYxvowc5q8qcT9VuoRjVrPJ';

const [pic, setPic] = useState(null);

const [card, setCard] = useState(null);
//outlet and getCard methods

//call the Card data
//call the cards
const callCard = async (search) =>{
  try{
    const response = (await getCard(search));
    const data = await response.data;
    // data loads
    console.log(data);
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
  const response = await fetch(`${apiKey} https://api.pexels.com/v1/${search}?query=${targetT}&per_page=${pageN}`);

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
  const response = await fetch(`${apiKey} https://api.pexels.com/v1/${search}?query=${targetT}&per_page=${pageN}`);
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
        <h1>Job Class Agency App(Under Construction)</h1>
        <h2>Find your dream job and save it</h2>
        <h3>Search for your dream job and hit the submit button</h3>
        <nav className="YoA">
          <Router>
                  <span><Link to="/">Home</Link></span>
                  <span><Link to="/Account">Account</Link></span>
                  <span><Link to ='/Clubs'>Clubs</Link></span>
                  <span><Link to ='/'>Contact</Link></span>
                  <span><Link to = '/'>Userbase</Link></span>
                  <span><Link to ='/Merch'>Merch</Link></span>
          </Router>
          <span>
            <a href="https://discover.bestcolleges.com/">Best Colleges</a>
          </span>
          <span>
            <a href="https://www.careerexplorer.com/assessments/"> 
            ``Please Take The Test First``</a>
          </span>
          </nav>
          <h2><p> Put the title of the job from your 
            assessment in the searchbar </p></h2>
        <Form cardsearch={callCard} id='cardsearch'></Form>
        <CardDisplay card={card}></CardDisplay>
        <div className="spano">
        {/* <Router> */}
        <footer>
        <nav></nav>
          </footer>
        </div>
      </Background>
    </div>
  );
}

export default App;