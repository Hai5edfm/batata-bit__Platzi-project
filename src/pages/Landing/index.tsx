import React, { FC } from 'react';
import '@src/styles/pages/Landing.scss'
import { Hero } from '@src/components/Hero';
import { ExchangeSection } from '@src/containers/ExchangeSection';
import { CharacteristicsSection } from '@src/containers/CharacteristicsSection';

const Landing: FC = () => {

  return(
    <React.Fragment>
      <Hero/>
      <main>
        <ExchangeSection/>
        <CharacteristicsSection/>
      </main>
    </React.Fragment>
  );
};

export default Landing ;

