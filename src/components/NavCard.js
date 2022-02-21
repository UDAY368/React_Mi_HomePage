import React from 'react';
import '../styles/NavCard.css';

function NavCard({name,price,image,index}) {
  return (
    <div className='NavCard'> 
      <img src={image} alt={`product ${index}`} />
      <p>{name}</p>
      <span>{price}</span>
    </div>
  );
}

export default NavCard;
