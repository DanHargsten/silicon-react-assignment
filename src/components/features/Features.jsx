import React from 'react';
import './features.scss';

const Features = () => {
   return (
      <section className="features">
         <div className="container">

            <div className="features__image">
               <img src="/images/illustrations/phone-your-cards.svg" alt="" />
            </div>

            <div className="features__heading">
               <h2 className="features__title">App Features</h2>
               <p className="features__subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
            </div>


            <div className="features__grid">
               <div className="feature-item">
                  <div className="feature-item__img">
                     <img src="/images/icons/ft-easy-payments.svg" alt="" />
                  </div>

                  <div>
                     <h3 className="feature-item-heading">Easy Payments</h3>
                     <p className="feature-item-subtext">Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                  </div>
               </div>


               <div className="feature-item">
                  <div className="feature-item__img">
                     <img src="/images/icons/ft-data-security.svg" alt="" />
                  </div>

                  <div>
                     <h3 className="feature-item-heading">Data Security</h3>
                     <p className="feature-item-subtext">Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
                  </div>
               </div>


               <div className="feature-item">
                  <div className="feature-item__img">
                     <img src="/images/icons/ft-cost-statistics.svg" alt="" />
                  </div>

                  <div>
                     <h3 className="feature-item-heading">Cost Statistics</h3>
                     <p className="feature-item-subtext">Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                  </div>
               </div>


               <div className="feature-item">
                  <div className="feature-item__img">
                     <img src="/images/icons/ft-support.svg" alt="" />
                  </div>
                  <div>
                     <h3 className="feature-item-heading">Support 24/7</h3>
                     <p className="feature-item-subtext">A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                  </div>
               </div>


               <div className="feature-item">
                  <div className="feature-item__img">
                     <img src="/images/icons/ft-regular-cashback.svg" alt="" />
                  </div>

                  <div>
                     <h3 className="feature-item-heading">Regular Cashback</h3>
                     <p className="feature-item-subtext">Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
                  </div>
               </div>


               <div className="feature-item">
                  <div className="feature-item__img">
                     <img src="/images/icons/ft-standards.svg" alt="" />
                  </div>

                  <div>
                     <h3 className="feature-item-heading">Top Standards</h3>
                     <p className="feature-item-subtext">Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Features