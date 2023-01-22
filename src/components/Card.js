import { useState, useEffect } from 'react';
import { getCard , deleteCard } from '../services/card-api';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Card() {
  const nav = useNavigate();
  const {id} = useParams();
  const [Card, setCard] = useState({});
  useEffect(() => {
    getCard(id)
    .then(res => setCard(res.data));
  }, []);

    const BushidoText = styled.h3`
    background-color: yellow;
    `;

    const BushidoSlash = styled.h3`
    text-decoration: line-through;
    `;
    const deleteTheCard = () =>
    {
      // delete function goes here
      // navigate back to the main screen
      deleteCard(id);
      nav('/');
    };
    const BushidoButton = styled.button`
        color: cyan;
    `;

  return (
    <div className='each'>
      {Card === true? 
        (<BushidoSlash>
          <h3>Title: {Card.title}</h3>
          <h3>Description: </h3>
        </BushidoSlash>) 
        : 
        (<BushidoText>
          <h3>description: {Card.description}</h3>
          <h3>Completed: </h3>
        </BushidoText> )}
      
      {Card.complete === true? 
      (<input type="checkbox" checked></input>) 
      : 
      (<input type="checkbox"></input>)}
      <br/>
      <BushidoButton><button onClick = {() => {nav(`/${id}/edit`)}}>Edit</button></BushidoButton>
      <br/>
      <BushidoButton><button onClick = {deleteTheCard}>Delete</button></BushidoButton>
      <br/>
      <BushidoButton><button onClick = {() => {nav('/')}}>Main</button></BushidoButton>
    </div>
  )
}