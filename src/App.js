import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import PreNavbar from './components/PreNavbar';
import {BrowserRouter as Router} from "react-router-dom";
import Slider from './components/Slider';
import data from './data/data.json';
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProducts from './components/StarProducts';


function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={data.banner.start} />
      <Offers offerData = {data.offer}/>
      <Heading text = "START PRODUCTS"/>
      <StarProducts starProdData ={data.starProduct}/>
      <Heading text = "HOT ACCESSORIES"/>
    </Router>
  );
}

export default App;
