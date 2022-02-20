import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import PreNavbar from './components/PreNavbar';
import {BrowserRouter as Router} from "react-router-dom";
import Slider from './components/Slider';
import data from './data/data.json';

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={data.banner.start} />
    </Router>
  );
}

export default App;
