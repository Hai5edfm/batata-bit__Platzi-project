import { FC } from 'react';
import '@src/styles/components/PlansCard/index.scss';
import { LinkButtonIcon } from '../Icons/LinkButtonIcon';
import { Link } from 'react-router-dom';

type PlansCardData = {
  recommended?: boolean,
  plan: string,
  plan_id: string,
  price: number,
  description: string
}

export const PlansCard: FC<PlansCardData> = (
  { recommended,
    plan,
    plan_id,
    price,
    description }: PlansCardData) => {
  return(
    <div className='Card-container'>
      {recommended && <span className='recommended'>Recomendado</span>}
      <h4>{plan}</h4>
      <p className="card--price"><span className='dollarSign'>$</span>{price}</p>
      <p className="card--description">{description}</p>
      <Link to={`/payment/${plan_id}`} className='choosePlan-button'> Eligir este Plan <LinkButtonIcon/></Link>
    </div>
  );
};

