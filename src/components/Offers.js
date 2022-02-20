import React from 'react';
import Offer from './Offer.js';
import '../styles/Offers.css';


function Offers({offerData}) {
  return (
    <div className='offerSection'>
      {offerData.map((item,index) =>(
        <Offer key={item.image} index={index} src = {item.image} link = {item.url}/>
      ))}
    </div>
  );
}

export default Offers;
