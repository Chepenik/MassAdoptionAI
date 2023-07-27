import React from 'react';
import HeroImageRight from './HomePage';
import FooterLinks from './FooterLinks';
import { header, footer } from './data';
import CardsCarousel from './CardsCarousel';
import GetInTouchSimple from './GetInTouchSimple';
import GridAsymmetrical from './GridAsymmetrical';
import BtcMap from './btcmap';
import Header from './header';

const Index = () => {
  return (
    <>
      <Header />
      <br />
      <HeroImageRight className="hero-image-right" />
      <br />
      <BtcMap />
      <CardsCarousel className="carousel-cards" />
      <GetInTouchSimple className="get-in-touch" />
      <FooterLinks className="footer-links" footer={footer} />
    </>
  );
};

export default Index;
