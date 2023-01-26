// get this made asap
import { useNavigate } from "react-router-dom";
import {createCard} from '../services/card-api';

import styled from "styled-components";
import React from 'react';

const CreateCard = () => {
  const nav = useNavigate();
  const BushidoBack =`
  background: rgba(150, 15, 105, 0.5);
  `;

  const BushidoT = styled.text`
        background-color: pink;
    `;

  const createTheCard = (e) =>{
    const card = {
    Image: e.target.Image.value,
    title: e.target.title.value,
    description: e.target.description.value,
    requirement: e.target.requirement.value,
    SATISFACTION: e.target.SATISFACTION.value,
    SG:  e.target.SG.value,
    SALARY :  e.target.SALARY.value,
    SV :  e.target.SV.value,
    titleII:  e.target.titleII.value
    };
    createCard(card);
    nav('/');
  };
  const req = "REQUIREMENT";
  return (
    <div>
      <h3>CreateCard</h3>
    <form onSubmit={createTheCard}>
            <BushidoBack>
              Image url here
              <input type='text' name='Image' id='img'/>
              add the Title
              <input type='text' name='title' id='titl'/>
              description here
              <input type='text' name='description' id='dsc'/>
              leave alone
              <input type='text' name='requirement' id='req' value={req}/>
              SATISFACTION?
              <input type='text' name='satisfaction' id='satis'/>
              Satisfaction Grade
              <input type='text' name='SG' id='sg'/>
              SALARY?
              <input type='text' name='SALARY' id='sal'/>
              Salary amount
              <input type='text' name='SA' id='sa'/>
              Same title above: 
              <input type='text' name='titleII' id='titlII'/>
              </BushidoBack>
            <BushidoT>
              <input type='submit'/>
              </BushidoT>
        </form>
    </div>
  )
}

export default CreateCard