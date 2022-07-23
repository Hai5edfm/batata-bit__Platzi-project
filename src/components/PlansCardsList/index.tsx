import { Dispatch, FC, SetStateAction } from 'react';
import { PlansCard } from '@src/components/PlansCard';
import '@src/styles/components/PlansCardsList/index.scss';

export type PlansCardsListData = {
  setPlanPayment: Dispatch<SetStateAction<{ planTitle: string, planPrice: number } | null>>;
}

export const CardsData = [
  {
    id: '1', 
    plan: "Pago Mensual",
    price: 5,
    saving: "*Plan básico para mantenerte informado",
    description: "Este plan se renueva automáticamente cada mes hasta que canceles la suscripción.",
  },
  {
    id: '2', 
    plan: "Pago Anual", 
    price: 49, 
    saving:"*Ahorras $129 comparado al plan mensual.",
    description: "Este plan se renueva automáticamente cada año hasta que canceles la suscripción.",
    recommended: true
  },
  {
    id: '3', 
    plan:"Acceso de por vida", 
    price: 99,
    description: "Con este plan tienes acceso de porvida a todos los contenidos de la plataforma. No se renueva automáticamente.",
    saving:"*Ahorras $999+ comparado al plan anual."
  }
];
export const PlansCardsList: FC<PlansCardsListData> = ({setPlanPayment}:PlansCardsListData) => {

  return(
    <div className="PlansCards-container">
      {CardsData.map((card, i) => (
        <PlansCard key={i} recommended={card?.recommended} plan={card.plan} plan_id={card.id} price={card.price} description={card.saving}/>
      ))}
    </div>
  );
};

