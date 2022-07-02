import React, {useEffect, useState} from "react"
import Recipe  from "./Recipe";
import './App.css';


function App() {

  // Credentials for the edaman API
  const APP_ID = "362fcf1e"
  const APP_KEY = '7a8757d75e79c27059a4134170d9b0fb'

  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');


  useEffect( () => {
    getRecipes();
  }, [query]);


  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);

  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');

  }

  return (
 
  <div className="App">
    <form onSubmit={getSearch} className="search-form">
        <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
        <button  type="submit" className="search-button">Search</button>
    </form>
    <div className="recipe">
      {recipes.map( recipe =>(
          <Recipe 
            key={recipe.recipe.label}
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories} 
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
      ))};
    </div>

  </div>
  )
}

export default App;
