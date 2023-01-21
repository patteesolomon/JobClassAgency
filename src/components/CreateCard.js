import { useNavigate } from "react-router-dom";
import {createCard} from '../services/cards-api';

import styled from "styled-components";

function Create() {
    const nav = useNavigate();

    const BushidoCard = styled.img`
        background-color: black;
    `;

    const BushidoDes = styled.text`
        color: cyan;
    `;

    const createTheCard = (e) => {
        const card = {description: e.target.title.value,
        e.target.description.value,
          e.target.img.value
        };
        createCard(card);
        nav('/');
    };

return(
    <div>
        <h4>Choose a Job Card</h4>
        <form onSubmit={createTheCard}>
            <BushidoBar><input type='text' name='description' id='dsc'/></BushidoBar>
            <BushidoButton><input type='submit'/></BushidoButton>
        </form>
    </div>
)
}

export default Create