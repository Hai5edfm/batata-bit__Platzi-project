import { FC } from 'react';
import bitcoinBaby from '@src/assets/components/IntersectionCharacteristics/bitcoinbaby@x1.jpg'
import bitcoinBabyX2 from '@src/assets/components/IntersectionCharacteristics/bitcoinbaby@x2.jpg'
import bitcoinBabyXLand from '@src/assets/components/IntersectionCharacteristics/bitcoinbaby@landscape.jpg'
import '@src/styles/components/IntersectionIMG/index.scss'


export const IntersectionIMG: FC = () => {
  return(
    <picture className='Intersection-img--container'>
      <source srcSet={bitcoinBabyXLand} width={834} height={300} media="(min-width: 375px)"/>
      <img alt='bitcoin baby image' src={bitcoinBaby} width={516} height={387}/>
    </picture>
  );
};
