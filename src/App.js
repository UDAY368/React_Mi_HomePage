import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import PreNavbar from './components/PreNavbar';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Slider from './components/Slider';
import data from './data/data.json';
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProducts from './components/StarProducts';
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import HotAccessories from './components/HotAccessories';
import ProductReviews from './components/ProductReviews';
import Videos from './components/Videos';
import Banner from './components/Banner';



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
      <HotAccessoriesMenu />
        <Route exact path = "/music">
          <HotAccessories musicData={data.hotAccessories.music}  musicCover = {data.hotAccessoriesCover.music}/>  
        </Route>

        <Route exact path = "/smartDevice">
          <HotAccessories smartDeviceData={data.hotAccessories.smartDevice}  smartDeviceCover = {data.hotAccessoriesCover.smartDevice}/>
        </Route>

        <Route exact path = "/home">
          <HotAccessories homeData={data.hotAccessories.home}  homeDataCover = {data.hotAccessoriesCover.home}/>
        </Route>

        <Route exact path = "/lifestyle">
          <HotAccessories lifestyleData={data.hotAccessories.lifeStyle}  lifestyleCover = {data.hotAccessoriesCover.lifeStyle}/>
        </Route>

        <Route exact path = "/mobiles">
          <HotAccessories mobilesData={data.hotAccessories.mobileAccessories}  mobilesCover = {data.hotAccessoriesCover.mobileAccessories}/>
        </Route>
        <Heading text = "PRODUCT REVIEWS"/>
        <ProductReviews productReviewData={data.productReviews}/>
        <Heading text = "VIDEOS"/>
        <Videos videosData = {data.videos}/>
        <Heading text = "IN THE PRESS"/>
        <Banner bannerData={data.banner.end}/>
    </Router>
  );
}

export default App;
