import './styles/base/index.scss';
import './styles/abstracts/index.scss';

import Header from './components/header/Header';
import Showcase from './components/showcase/Showcase';
import Logos from './components/logos/Logos';
import Features from './components/features/Features';
import Slider from './components/slider/Slider';
import FeaturesExtended from './components/features-extended/FeaturesExtended';
import Testimonials from './components/testimonials/Testimonials';
import Faqs from './components/faqs/Faqs';
import Subscribe from './components/subscribe/Subscribe';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <>
      <div className="wrapper space-y-2">
        <Header />
        <Showcase />
        <Logos />
        <Features />
        <Slider />
        <FeaturesExtended />
        <Testimonials />
        <Faqs />
        <Subscribe />
        <Footer year={2024} credit={"MadrasThemes"} />
      </div>
    </>
  );
}

export default App;
