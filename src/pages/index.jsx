import HeroImageRight from './HomePage';
import FooterLinks from './FooterLinks';
import { data } from './Data';
import CardsCarousel from './CardsCarousel';
import React from 'react';

const Index = () => {

  return (
    <>
		<HeroImageRight />
		<div style={{ marginTop: '100px' }} />
		<CardsCarousel className="carousel" />
		<FooterLinks data={data} />
    </>
  );
};

export default Index;

