import React from 'react';
import ProductReviewCard from './ProductReviewCard.js';
import '../styles/ProductReviews.css';

function ProductReviews({productReviewData}) {
  return (
    <div className='ProductReviews'>
      {productReviewData.map((item,index)=>(
        <ProductReviewCard key={item.image} index={index} image={item.image} 
        review = {item.review} name = {item.name} price={item.price} />
      ))}
    </div>
  );
}

export default ProductReviews;
