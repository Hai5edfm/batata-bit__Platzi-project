import { FC, useState } from 'react';
import '@src/styles/containers/PlansSection/index.scss'
import { PlansCardsList } from '@src/components/PlansCardsList'
import { PlanPaymentCard } from '@src/components/PlanPaymentCard';

export const PlansSection: FC = () => {
  const [planPayment, setPlanPayment] = useState<{
    planTitle: string, planPrice: number
  } | null>(null);
  
  return(
    <section id='PlansSection' className='PlansSection-container'>
      <h3 className="PlansSection--title">Escoge el plan que mejor se ajuste a ti.</h3>
      <p className='PlansSection--description'>Cualquier plan te da acceso completo a nuestra plataforma.</p>
      <PlansCardsList setPlanPayment={setPlanPayment}/>
      <PlanPaymentCard planPayment={planPayment}/>
    </section>
  );
};
