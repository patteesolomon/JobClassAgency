import { useEffect, useState } from "react";
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
export default function App() {
  var {exec, spawn, execSync, spawnSync} = require('child_process');

const apiKey = 'v8BN36osB5u4ETQwIlPmVM6HHEN3FH2MDZYxvowc5q8qcT9VuoRjVrPJ';

const [pic, setPic] = useState(null);

const curlCall = async (search, targetT, pageN) =>
{
  var ls = spawn('ls');

  ls.stdout.on('data', function(data){
    console.log(data);
  })
  ls.stderr.on('error', function(err){
    console.error(err);
  })

  var data = execSync("curl -H");

  //page rand here
  pageN = 0; // zero for now
  try{
  const response = await fetch(`${data} + Authorization: ${apiKey} \ https://api.pexels.com/v1/${search}?query=${targetT}&per_page=${pageN}`);

  const data2 = await response.json();
    setPic(data2);
  } catch(e){
    console.error(e);
  }

};

const getPList = async (search, targetT, pageN) =>
{
  var ls = spawn('ls');

  ls.stdout.on('data', function(data){
    console.log(data);
  })
  ls.stderr.on('error', function(err){
    console.error(err);
  })

  var data = execSync("curl -H");

  //page rand here
  pageN = 0; // zero for now
  try{
  const response = await fetch(`${data} + Authorization: ${apiKey} \ https://api.pexels.com/v1/${search}?query=${targetT}&per_page=${pageN}`);

  const data = await response.json();
  setPic(data);

  } catch (e){
    console.error(e);
  }
  
};

  useEffect(() => {
    getPList("laughter","comedy", 100);
  }, []);

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
