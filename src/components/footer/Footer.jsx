import React from 'react';
import './footer.scss';

// Adding props to make the component a bit more flexible
const Footer = ({ year, credit }) => {
  return (
   <footer role="contentinfo">
      <div className="container">
         <p className="copyright">© {year} Silicon. All rights reserved.</p>
         <p className="credit">Credit {credit}</p>
      </div>
   </footer>
  );
};

export default Footer;