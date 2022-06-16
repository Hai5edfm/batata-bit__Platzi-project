import { FC } from 'react';
import '@src/styles/containers/PlansSection/index.scss'
import { PlansCardsList } from '@src/components/PlansCardsList'

export const PlansSection: FC = () => {
  return(
    <section className='PlansSection-container'>
      <h3 className="PlansSection--title">Escoge el plan que mejor se ajuste a ti.</h3>
      <p className='PlansSection--description'>Cualquier plan te da acceso completo a nuestra plataforma.</p>
      <PlansCardsList/>

    </section>
  );
};
