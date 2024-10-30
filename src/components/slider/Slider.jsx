import React from 'react';
import './slider.scss';

const Slider = () => {
  return (
    <section className="slider">
    <div className="container">

       <h2 className="slider__heading">How Does It Work?</h2>
       <div className="slider__carousel-container">
          <div className="slider__carousel-images">
             <img className="carousel-image-1" src="/images/phones/carousel-1-my-budget.svg" alt="Overview of My Budget feature on Silicon app." />
             <img className="carousel-image-2" src="/images/phones/carousel-2-your-cards.svg" alt="Overview of Your Cards feature on Silicon app." />
             <img className="carousel-image-3" src="/images/phones/carousel-3-transfer.svg" alt="Overview of Transfer feature on Silicon app." />
          </div>
          <h3 className="slider__carousel-heading">Latest transaction history</h3>
          <p className="slider__carousel-text">Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum. </p>
       </div>

    </div>
 </section>
  )
}

export default Slider;