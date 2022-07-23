import React, { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CardsData } from '@src/components/PlansCardsList';

import '@src/styles/pages/Payment.scss';

export const Payment: FC = () => {
    const { id } = useParams();
    const selectedPlan = CardsData.find(card => card.id == id);

    return (
        <React.Fragment>
            <header className='header'>
                <Link to="/" children='go back'/>
            </header>
            <main>
                <div className='planPayment-container'>
                    <h2>{selectedPlan?.plan}</h2>
                </div>
                <div className='planPayment-description'>
                    <p>{selectedPlan?.saving}</p>
                    <p>{selectedPlan?.description}</p>
                </div>
                <div className='planPayment-price'>
                    <h3>{selectedPlan?.price}</h3>
                </div>
            </main>
        </React.Fragment>
    )
}



