import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import './App.css';


function Card(){
    const itemId = '';
    useEffect(() => {
        fetchCard();
      }, []);

    const [card, setCard] = useState({});
    let { id } = useParams();
    console.log(id);

    const fetchCard = async () => {
        // const item = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${itemId}`);
        const item = await fetch(`https://fortnite-api.theapinetwork.com/prod09/item/get?cosmeticId=${
            id}`);
        const card = await item.json();
        console.log('CARD');
        console.log(card.language);
        setCard(card)
    };

    return (
        <div>
            <h1>{card.language}</h1>
        </div>
    );
}


export default Card;