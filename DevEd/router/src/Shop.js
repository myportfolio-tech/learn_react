import React, {useState, useEffect} from "react";
import './App.css';
import {Link} from 'react-router-dom';


function Shop() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [hits, setHits] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get')
    const items = await data.json();
    const hits = items.data
    setHits(hits);
    {hits.map(hit  => (
      console.log(hit.item)
    ))};
  }

  return (
    <div>
      {hits.map(hit  => (
        <div>
        <h1 key={hit.item.costmeticId}>
         <Link to={`/shop/${hit.item.costmeticId}`}>{hit.item.name}</Link>
         </h1>
        {/* <img src={hit.item.images.icon} /> */}
        </div>
      ))};
    </div>
  );
}

export default Shop;