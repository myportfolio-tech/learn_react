import React from "react";
import './App.css';
import MovieList from "./movielist";
import Nav from "./nav";

function App() {
  return (
    <div className="App">
        <Nav />
        <MovieList />
    </div>
  );
}

export default App;
