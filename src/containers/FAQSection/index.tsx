import { FC } from 'react';
import { FAQList } from '@src/components/FAQList';
import '@src/styles/containers/FAQSection/index.scss'

export const FAQSection: FC = () => {

  return(
    <section className='FAQSection'>
      <h3>¿Preguntas? Estamos aquí para ti.</h3>
      <FAQList/>
    </section>
  );
};
