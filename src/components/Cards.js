import { getCards } from "../services/card-api";
import{useState, useEffect} from 'react';
import CreateCard from "./CreateCard";

export default function Cards() {
    const [Cards, setCards] = useState([]);
    
    const URL = `https://jcacards.onrender.com`;
    const data = fetch(URL);
    useEffect(() => {
        getCards() // calling the function to get the data
        .then(res => setCards(res.data)); // setting state with returned data
    }, []);
    console.log(Cards);
    const list = Cards.Search.map(it => {
        return (
            <div key={it.title}>
            <p>{it.description}</p>
            <img src={it.Image} alt=''/>
            <p>{it.requirement}</p>
            <p>{it.SATISFACTION}</p>
            <p>{it.SG}</p>
            <p>{it.SALARY}</p>
            <p>{it.SV}</p>
            <p>{it.titleII}</p>
            </div>
            );
        }
    )
    return(
        <div>
        {list}
        <CreateCard/>
            </div>
    );
}