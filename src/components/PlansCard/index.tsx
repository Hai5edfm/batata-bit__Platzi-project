import { Dispatch, FC, SetStateAction } from 'react';
import '@src/styles/components/PlansCard/index.scss';
import { LinkButtonIcon } from '../Icons/LinkButtonIcon';

type PlansCardData = {
  recommended?: boolean,
  plan: string,
  price: number,
  description: string
  setPlanPayment: Dispatch<SetStateAction<{ planTitle: string, planPrice: number } | null>>;
}

export const PlansCard: FC<PlansCardData> = (
  { recommended,
    plan,
    price,
    description,
    setPlanPayment }: PlansCardData) => {
  return(
    <div className='Card-container'>
      {recommended && <span className='recommended'>Recomendado</span>}
      <h4>{plan}</h4>
      <p className="card--price"><span className='dollarSign'>$</span>{price}</p>
      <p className="card--description">{description}</p>
      <button onClick={() => setPlanPayment({ planTitle: plan, planPrice: price })} className='choosePlan-button'> Eligir este Plan <LinkButtonIcon/></button>
    </div>
  );
};

