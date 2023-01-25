import { getCards } from "../services/card-api";
import{useState, useEffect} from 'react';
import Create from "./CreateCard";
import { Link } from "react-router-dom";

export default function Cards() {
    const [Cards, setCards] = useState([]);
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
                // this whole this is rushed as shit
                // get the data going...
                // 
            );
        })
    return(
        <div>
            <>
            {Cards.map((todo) =>{
                return (
                    <div>
                    <Link to={`/${todo._id}`}>{todo.description}</Link>
                    </div>
                    // <li><a href={`/${todo._id}`}>{todo.description}</a></li>
                )
            })}
            </>
            <Create />  
        </div>
    )
}