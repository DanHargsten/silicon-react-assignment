import React from 'react';
import './showcase.scss';

const Showcase = () => {
  return (
    <section className="showcase">
    <div className="container">

       <div className="showcase__headline">
          <h1 className="showcase__headline">Manage All Your Money in One App</h1>
       </div>

        <div className="showcase__content">
          <p className="showcase__content-text">We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>

          <div className="showcase__buttons">
             <a href="#" className="btn-market btn--app-store">
                <img src="/images/logos/appstore-light.svg" alt="Download on the App Store." />
             </a>
             <a href="#" className="btn-market btn--google-play">
                <img src="/images/logos/googleplay-light.svg" alt="Get it on Google Play." />
             </a>
          </div>

          <div className="showcase__more"> 
             <a href="#" className="btn-circle">
                <i className="fa-solid fa-chevron-down"></i>
             </a> 
             <span className="showcase__more-text">Discover more</span> 
          </div>
       </div>

       <div className="showcase__image">
          <img src="/images/illustrations/showcase-phones.svg" alt="Two phones showing off Silicon app features with a graph and cards" />
       </div>

    </div>
 </section>
  )
}

export default Showcase