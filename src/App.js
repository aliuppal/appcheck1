import logo from './logo.svg';
import React from 'react';
import './App.css';
import Dinner from './dinner';

function App() {
  return (
    <div className="App">
   <Dinner dishName="Karahi" sweetDish="Kheer"/>
   <Dinner dishName="Biryani" sweetDish="Halwa"/>
   <Dinner dishName="Shawarma" sweetDish="Ice Cream"/>
   </div>
  )
}

export default App;
