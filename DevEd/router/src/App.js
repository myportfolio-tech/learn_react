import React from "react";
import './App.css';

import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import Card from "./Card";

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/shop/:id" element={<Card/>}/>
        </Routes>
      </div>        
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
