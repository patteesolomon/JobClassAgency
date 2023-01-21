// import Create from "./CreateCard";
//connecting our data. js 
import{ getCards, deleteCard } from "../services/card-api";
import { useState , useEffect } from 'react';
import styled from "styled-components";

export default function Cards() {
    const [cardList, setCardList] = useState([]);

    const URL = 'http://localhost:3001/'; 
    const data = fetch(URL);
    useEffect(() =>{
        getCards() // calling the function to get the data
        .then(res => setCardList(res.data)); // settting state
    //getAllTodos();
}, []);

const CardStl = styled.a`
    font-size: 1.5em;
    width: 2in;
`;

    console.log(cardList);
    //setToDoList(data); // spit the data retrieved
    // const deleteTheCard = (id) =>
    // {
    //   // delete function goes here
    //     deleteCard(id);
    // };
    return (
        <div> 
            Jobs Selected
                {/* conditional rendering? */}
                {/* this conditional heirarchy order is important */}
                {/*conditional styles*/}
                {/* {todoList.map((card) =>{
            <div className="cardPic">
            <img src={`/${card.img}`}/>
<div>{`/${card.title}`}</div>
<div>{`/${card.description}`}</div>
            </div>
            }) */}
            
            {/* <Create/>   */}
        </div>
    )
}
