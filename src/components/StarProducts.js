import React from 'react';
import '../styles/StarProducts.css';

function StarProducts({starProdData}) {
  return (
    <div className='starProdSection'>
      <div>
          <a href={starProdData[0].url}>
            <img src={starProdData[0].image} alt='1st product' />
          </a>
      </div>
      <div>
        <a href={starProdData[1].url}><img src={starProdData[1].image} alt='2st product' /></a>
        <a href={starProdData[2].url}><img src={starProdData[2].image} alt='3st product' /></a>
        <a href={starProdData[3].url}><img src={starProdData[3].image} alt='4st product' /></a>
      </div>
    </div>
  );
}

export default StarProducts;
