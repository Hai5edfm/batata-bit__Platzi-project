import React, { FC } from 'react';
import '@src/styles/pages/Landing.scss'
import { Hero } from '@src/components/Hero';
import { ExchangeSection } from '@src/containers/ExchangeSection';
import { CharacteristicsSection } from '@src/containers/CharacteristicsSection';
import { IntersectionIMG } from '@src/components/IntersectionIMG';
import { PlansSection } from '@src/containers/PlansSection';
import { FAQSection } from '@src/containers/FAQSection';
import { Footer } from '@src/containers/Footer';

const Landing: FC = () => {

  return(
    <React.Fragment>
      <Hero/>
      <main>
        <ExchangeSection/>
        <CharacteristicsSection/>
        <IntersectionIMG/>
        <PlansSection/>
        <FAQSection/>
      </main>
      <Footer/>
    </React.Fragment>
  );
};

export default Landing ;

