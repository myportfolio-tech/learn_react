import React from "react";
import './App.css';
import MovieList from "./movielist";
import Nav from "./nav";
import AddMovie from './AddMovie';
import {MovieProvider} from './movieContext';

function App() {
  return (
    <MovieProvider>
      <div className="App">
          <Nav />
          <AddMovie />
          <MovieList />
      </div>
    </MovieProvider>

  );
}

export default App;
