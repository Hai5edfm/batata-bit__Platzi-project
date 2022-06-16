import { FC } from 'react';
import '@src/styles/components/PlansCard/index.scss';

type PlansCardData = {
  recommended?: boolean,
  plan: string,
  price: number,
  description: string
}

export const PlansCard: FC<PlansCardData> = ({recommended, plan, price, description}: PlansCardData) => {
  return(
    <div className='Card-container'>
      {recommended && <span className='recommended'>Recommended</span>}
      <h4>{plan}</h4>
      <p className="card--price"><span className='dollarSign'>$</span>{price}</p>
      <p className="card--description">{description}</p>
      <a href='#' className='choosePlan-button'/>
    </div>
  );
};

