import { useState, useEffect } from 'react';
import { getCard , deleteCard } from '../services/card-api';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Card() {
  const nav = useNavigate();
  const {title} = useParams();
  const [card, setCard] = useState({});
  useEffect(() => {
    getCard(title)
    .then(res => setCard(res.data));
  }, []);

    const BushidoText = styled.h3`
    background-color: red;
    `

    const BushidoSlash = styled.h3`
    text-decoration: line-through;
    `
    const deleteTheCard = () =>
    {
      // delete function goes here
      // navigate back to the main screen
        deleteCard(title);
        nav('/');
    };
    // by itself it make a grey tab
    const BushidoButton = styled.button`
        background-color: cyan;
    `;

return (
    <div className='each'>
        <BushidoSlash>
            <h3>Title: {card.title}</h3>
        </BushidoSlash>
        {/* <br/>
        <BushidoText><button onClick = {() => {nav(`/${_id}/edit`)}}>Edit</button></BushidoText>
        <br/>
        <BushidoButton><button onClick = {deleteTheCard}>Delete</button></BushidoButton>
        <br/>
        <BushidoButton><button onClick = {() => {nav('/')}}>Main</button></BushidoButton> */}
    </div>
    )
}