import { getCards } from "../services/card-api";
import {useState, useEffect} from 'react';

export default async function Cards() {
    const [Cards, setCards] = useState([]);
    
    const URL = `https://jcacards.onrender.com/cards`;
    const responce = fetch(URL);
    const data = await responce.json();
    setCards(setCards(data));
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