import React, { FC } from 'react';
import '@src/styles/pages/Landing.scss'
import { Hero } from '@src/components/Hero';
import BitcoinImg from '../../assets/components/ExchangeRateSection/Bitcoin.png';
import BitcoinImgX2 from '../../assets/components/ExchangeRateSection/Bitcoin@x2.png';
import { ExchangeRateTable } from '@src/components/ExchangeRateTable';

const Landing: FC = () => {
  const coins = [
    {name: "Bitcoin", exchange: "1.96", trend:"down"},
    {name: "Ethereum", exchange: "0.07", trend:"up"},
    {name: "Ripple", exchange: "2.15", trend:"down"},
    {name: "Stellar", exchange: "4.96", trend:"down"},
  ]
  const commisions = [
    {name: "Bitrade", commision: "12.96"},
    {name: "Bitpreco", commision: "13.07"},
    {name: "Novadax", commision: "13.15"},
    {name: "Coinext", commision: "14.96"},
  ]
  return(
    <React.Fragment>
      <Hero/>
      <main>
        <picture className='BitcoinImg'>
          <source srcSet={BitcoinImgX2} width={250} height={250} media="(min-width: 500px)"/>
          <img alt='bitcoin image' width={250} height={250} src={BitcoinImg}/>
        </picture>
        <ExchangeRateTable title='Coins' rows={coins}/>
        <ExchangeRateTable title='Commisions' rows={commisions}/>
      </main>
    </React.Fragment>
  );
};

export default Landing ;

