import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HotAccessoriesMenu.css';

function HotAccessoriesMenu() {
  return (
    <div className='HotAccessoriesMenu'>
      <Link className='HotAccessoriesLinks' to='/music'>Music Store</Link>
      <Link className='HotAccessoriesLinks' to='/smartDevice'>Smart Devices</Link>
      <Link className='HotAccessoriesLinks' to='/home'>Home</Link>
      <Link className='HotAccessoriesLinks' to='/lifestyle'>Lifestyle</Link>
      <Link className='HotAccessoriesLinks' to='/mobiles'>Mobile Accessories</Link>
    </div>
  );
}

export default HotAccessoriesMenu;
