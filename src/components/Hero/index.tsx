import { FC } from 'react';
import { CTAButton } from '@src/components/CTAButton';
import '@src/styles/components/Hero/index.scss'
import { MainIsotype } from '../Icons/MainIsotype';

export const Hero: FC = () => {
  return(
    <header className='hero-container'>
      <div className='hero-container__info'>
        <h1><MainIsotype width={41} height={24}/>Batatabit</h1>
        <h2>La próxima revolución en el intercambio de criptomonedas.</h2>
        <p>Batatabit te ayuda a navegar entre los diferentes precios y tendencias</p>
      </div>
      <CTAButton/>
    </header>
  );
};
