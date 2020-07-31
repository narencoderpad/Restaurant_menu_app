import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home.js';
import Categories from './components/categories.js';


function App() {
  return (
    <div className="menuApp">
      <BrowserRouter>
        <h2>Welcome to Chef Chu's Restaurant</h2>
        <Link to="/" className="navBtn">Home</Link>
        <Link to="/categories" className="navBtn">Categories</Link>

        <Route exact path="/" render={() => (
          <Home></Home>
        )} />

        <Route path="/categories" render={() => (
          <Categories></Categories>
        )} />
      </BrowserRouter>
    </div>
  );
}

export default App;
