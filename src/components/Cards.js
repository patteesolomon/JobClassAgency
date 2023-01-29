import { getCards } from "../services/card-api";
import {useState, useEffect} from 'react';
import CreateCard from "./CreateCard";

export default function Cards() {
    const [Cards, setCards] = useState([]);
    
    const URL = `https://jcacards.onrender.com/cards`;
    useEffect(() => {
        getCards() // calling the function to get the data
        .then(res => setCards(res.data)); // setting state with returned data
    }, []);
    console.log(Cards);
    return(
        <div>
            <ul>
                {Cards.map((card) => {
                    return(
                        <div>
                            {card._id}
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}