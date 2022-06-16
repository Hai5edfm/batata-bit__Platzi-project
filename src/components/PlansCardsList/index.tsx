import { FC } from 'react';
import { PlansCard } from '@src/components/PlansCard';
import '@src/styles/components/PlansCardsList/index.scss';

export const PlansCardsList: FC = () => {
  const CardsData = [
    {plan: "Pago Anual", price: 5, description: "*Plan básico para mantenerte informado"},
    {recommended: true, plan: "Pago Anual", price: 49, description:"*Ahorras $129 comparado al plan mensual."},
    {plan:"Acceso de por vida", price: 99, description:"*Ahorras $999+ comparado al plan anual."}
  ];

  return(
    <div className="PlansCards-container">
      {CardsData.map((card, i) => (
        <PlansCard key={i} recommended={card?.recommended} plan={card.plan} price={card.price} description={card.description}/>
      ))}
    </div>
  );
};

