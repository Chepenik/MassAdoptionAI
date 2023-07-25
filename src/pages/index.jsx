import HeroImageRight from './HomePage';
import FooterLinks from './FooterLinks';
import { header, footer } from './data';
import CardsCarousel from './CardsCarousel';
import React from 'react';
import GetInTouchSimple from './GetInTouchSimple';
import GridAsymmetrical from './GridAsymmetrical';
import HeaderWithBitcoin from './HeaderWithBitcoin';
import BtcMap from './btcmap';

const Index = () => {

  return (
    <>
    <HeaderWithBitcoin mainLinks={header} userLinks={[]} />
		<HeroImageRight />
    <BtcMap />
    <GridAsymmetrical />
		<CardsCarousel className="carousel" />
    <GetInTouchSimple className="carousel" />
		<FooterLinks footer={footer} />
    </>
  );
};

export default Index;