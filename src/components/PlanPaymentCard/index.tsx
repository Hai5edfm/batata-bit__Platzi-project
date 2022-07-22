import { FC } from 'react';
import '@src/styles/components/PlanPaymentCard/index.scss';

export type PlanPaymentTypes = {
    planPayment: { planTitle: string, planPrice: number } | null;
}

export const PlanPaymentCard: FC<PlanPaymentTypes> = ({planPayment}:PlanPaymentTypes) => {
    if(planPayment === null) {
        return null;
    } else {
        return (
            <div className='PlanPayment-modal__container'>
                <div className='PlanPayment-modal__card'>
                    <h2>{planPayment?.planTitle}</h2>
                    <div>
                        <p>{planPayment?.planPrice}</p>
                    </div>
                </div>
            </div>
        );
    }
}

