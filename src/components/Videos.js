import React from 'react';
import VideoCard from './VideoCard';
import '../styles/Videos.css';

function Videos({videosData}) {
  return (
    <div className='Videos'>
      {videosData.map((item,index)=>(
        <VideoCard  key={item.image} index={index} name ={item.name} image ={item.image} />
      ))}
    </div>
  );
}

export default Videos;