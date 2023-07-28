import React from 'react';
import HeroImageRight from './HomePage';
import FooterLinks from './FooterLinks';
import { Header, footer } from './Data';
import CardsCarousel from './CardsCarousel';
import GetInTouchSimple from './GetInTouchSimple';
import BtcMap from './btcmap';
import Header from './Header';

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
