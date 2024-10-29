import React from 'react';
import './logos.scss';

const Logos = () => {
  // Array of logo objects with `src` and `alt` properties
  const logos = [
    { src: '/images/logos/logoipsum-1.svg', alt: "Logo for Ipsum Brand 1." },
    { src: '/images/logos/logoipsum-2.svg', alt: "Logo for Ipsum Brand 2." },
    { src: '/images/logos/logoipsum-3.svg', alt: "Logo for Ipsum Brand 3." },
    { src: '/images/logos/logoipsum-4.svg', alt: "Logo for Ipsum Brand 4." },
    { src: '/images/logos/logoipsum-5.svg', alt: "Logo for Ipsum Brand 5." },
    { src: '/images/logos/logoipsum-6.svg', alt: "Logo for Ipsum Brand 6." }
  ];


  return (
    <section className="logos" aria-label="Brand logos.">
      <div className="container">
        {logos.map((logo, index) => (
          <div className="logos__cards" key="index">
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Logos;