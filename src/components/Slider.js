import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import '../styles/Slider.css';
// // import 'bootstrap/dist/css/bootstrap.min.css'; instead of this add the bootstrap css in the index.html

function Slider({start}) {
  return (
    <Carousel fade interval={2000}>
        {start.map((item,index) =>(
            <Carousel.Item key={index}>
                <img
                    className="d-block w-100"
                    src= {item}
                    alt="slide images"
                />
            </Carousel.Item>
        ))}

    </Carousel>
  );
}

export default Slider;
