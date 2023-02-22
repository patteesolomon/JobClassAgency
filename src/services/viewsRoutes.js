import {Clubs} from "./views/Clubs";
import {Userbase} from "../views/Userbase";
import {Merch} from "./views/Merch";
import {Contact} from "./views/Contact";

import axios from "axios";


// pages
export const getClubs = () =>
{
    const response = axios.get('/:Clubs');
    return response;
};

axios.get('/:Contact', (req, res) =>{
    res.render(Contact);
});

axios.get('/:Merch', (req, res) =>{
    res.render(Merch);
});

axios.get('/:Userbase', (req, res) =>{
    res.render(Userbase);
});