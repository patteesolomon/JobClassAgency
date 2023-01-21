import { useNavigate, useParams } from "react-router-dom";
import { editCard , getCard } from "../services/cards-api";
import { useState, useEffect } from 'react';
import styled from 'styled-components';

export const EditCard = () => {
    const {id} = useParams();
    const nav = useNavigate();
    const [data, setData] = useState({});

        useEffect(() =>
        {
            getCard(id) // getting the todo that matches this id
            .then(res => setData(res.data));
        }, []);
        
        const editTheCard = e => {
            e.preventDefault();
        const updatedCard = { 
            description: e.target.description.value,
            complete: e.target.complete.checked
        };
        editCard(id, updatedCard);
        nav(`/${id}`);
    };
    const BushidoButton = styled.button`
        background-color: lime;
    `;

    return (
        <div>
            <form onSubmit = {editTheCard}>
                Description: <input type = "text" name = 'description' defaultValue = {data.description}/>
                <br/>
                Completed: <input type = 'checkbox' name = 'complete' defaultChecked = {data.complete}/>
                <br/>
                <BushidoButton><input type='submit'/></BushidoButton>
            </form>
        </div>
        )
    
}
