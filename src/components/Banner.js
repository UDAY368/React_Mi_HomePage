import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import '../styles/Banner.css';

function Banner({bannerData}) {
  return (
    <Carousel fade id='Banner'>
      {bannerData.map((item,index) =>(
          <Carousel.Item key={item.image} id='bannerImage' interval={1000} keyboard={true}>
            <img
              className="d-block w-100"
              src= {item.image}
              alt= {`slide ${index}`}
            />
            <Carousel.Caption id='bannerDesc'>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{`Source: ${item.source}`}</p>
              <u>Read More</u>
            </Carousel.Caption>
          </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Banner;
