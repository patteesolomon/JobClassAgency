import axios from "axios";

// fetch("url")
// .then(response => response.json())
// .then(data => console.log(data))
// SHOW ALL 
const baseURL = 'https://jcacards.onrender.com';
// port to our express app 
// defining it here makes things easier
// the slash is for everything comming from the default route

export const getCards = () =>{
    const URL = baseURL;// base URL
    const response = axios.get(URL);
    return response;
};

export const getCard = (id) => {
    const URL = `${baseURL}/${id}`;
    const response = axios.get(URL);
    return response;
};

export const editCard = (id, updatedCard) => {
    const URL = `${baseURL}/${id}`;
    const response = axios.put(URL, updatedCard);
    return response;
};

export const createCard = (card) => {
    const URL = baseURL;
    const response = axios.post(URL, card);
    return response;
};

export const deleteCard = (id) =>
{
    const URL = `${baseURL}/${id}`;
    const response = axios.delete(URL);
    return response;
};