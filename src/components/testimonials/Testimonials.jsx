import React from 'react';
import './testimonials.scss';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">

        <h2 className="testimonials__heading">Clients are Loving Our App</h2>


        <figure className="testimonials__card">
          <img className="testimonials__quote" src="/images/icons/quotes.svg" alt="" />
          <img className="testimonials__rating" src="/images/icons/rating-4.svg" alt="Rated 4 out of 5 stars by Fannie Summers." />
          <blockquote className="testimonials__text">
            Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.
          </blockquote>

          <figcaption className="testimonials__user-info">
            <img className="testimonials__user-photo" src="/images/icons/test-portrait-fannie.svg" alt="Portrait of Fannie Summers." />
            <div className="testimonials__user-text">
                <p className="testimonials__user-name">Fannie Summers</p>
                <p className="testimonials__user-role">Designer</p>
            </div>
          </figcaption>               
        </figure>
        

        <figure className="testimonials__card">
          <img className="testimonials__quote" src="/images/icons/quotes.svg" alt="" />
          <img className="testimonials__rating" src="/images/icons/rating-5.svg" alt="Rated 5 out of 5 stars by Albert Flores." />
          <blockquote className="testimonials__text">
            Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.
          </blockquote>

          <figcaption className="testimonials__user-info">
            <img className="testimonials__user-photo" src="/images/icons/test-portrait-albert.svg" alt="Portrait of Albert Flores." />
            <div className="testimonials__user-text">
                <p className="testimonials__user-name">Albert Flores</p>
                <p className="testimonials__user-role">Developer</p>
            </div>
          </figcaption>               
        </figure>           

      </div>
    </section>
  )
}

export default Testimonials;