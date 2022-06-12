import { FC } from 'react'
import '@src/styles/containers/CharacteristicsSection/index.scss'
import { CharacteristicCardList } from '@src/components/CharacteristicCardList';

export const CharacteristicsSection: FC = () => {
  return(
    <section className='characteristics__section'>
      <h3 className='characteristics__section--title'>Te ayudamos a tomar la mejor decisión, siempre.</h3>
      <p className='characteristics__section--paragraph'>Que la incertidumbre en materia de criptomonedas sea cosa del pasado.</p>
      <CharacteristicCardList/>
    </section>
  );
};

