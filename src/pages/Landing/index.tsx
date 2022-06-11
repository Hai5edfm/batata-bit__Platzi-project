import React, { FC } from 'react';
import '@src/styles/pages/Landing.scss'
import { Hero } from '@src/components/Hero';
import BitcoinImg from '../../assets/components/ExchangeRateSection/Bitcoin.png';
import BitcoinImgX2 from '../../assets/components/ExchangeRateSection/Bitcoin@x2.png';
import { ExchangeRateTable } from '@src/components/ExchangeRateTable';
import { ExchangeSection } from '@src/containers/ExchangeSection';

const Landing: FC = () => {

  return(
    <React.Fragment>
      <Hero/>
      <main>
        <picture className='BitcoinImg'>
          <source srcSet={BitcoinImgX2} width={250} height={250} media="(min-width: 500px)"/>
          <img alt='bitcoin image' width={250} height={250} src={BitcoinImg}/>
        </picture>
        <ExchangeSection/>
      </main>
    </React.Fragment>
  );
};

export default Landing ;

