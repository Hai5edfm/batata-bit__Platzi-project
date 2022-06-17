import { ExchangeRateTable } from '@src/components/ExchangeRateTable';
import { FC } from 'react';
import { useState } from "react";
import { ArrowButton } from '@src/components/Icons/ArrowButton';

import BitcoinImg from '../../assets/components/ExchangeRateSection/Bitcoin.png';
import BitcoinImgX2 from '../../assets/components/ExchangeRateSection/Bitcoin@x2.png';
import '@src/styles/containers/ExchangeSection/index.scss'


export const ExchangeSection: FC = () => {
  const [table, setTable] = useState("coins");
  
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
    <section className='Exchange-section'>
      <picture className='BitcoinImg'>
        <source srcSet={BitcoinImgX2} width={250} height={250} media="(min-width: 500px)"/>
        <img alt='bitcoin image' width={250} height={250} src={BitcoinImg}/>
      </picture>
      <h2>Visibilizamos todas las tasas de cambio.</h2>
      <p>Traemos información en tiempo real de las casas de cambio y las monedas más importantes del mundo.</p>
      <article>
        <div className="Exchange-tables mobile-size">
          <span className={`prev ${table == "coins" ? 'buttonHidden' : ''}`} 
            onClick={() => { if(table == "commisions") return setTable("coins") }
          }>
            <ArrowButton color="#201E1C" rotate='left'/>
          </span>
          {table == 'coins' ?  <ExchangeRateTable title='Coins' rows={coins}/> : <ExchangeRateTable title='Commisions' rows={commisions}/>}
          <span className={`next ${table == "coins" ? '' : 'buttonHidden'}`} 
            onClick={() => {
              if(table == "coins") return setTable("commisions")
            }
          }>
            <ArrowButton color="#201E1C" rotate='right'/>
          </span>
        </div>
        <div className="Exchange-tables tablet-size">
           <ExchangeRateTable title='Coins' rows={coins}/>
           <ExchangeRateTable title='Commisions' rows={commisions}/>
        </div>
      </article>
    </section>
  );
};
