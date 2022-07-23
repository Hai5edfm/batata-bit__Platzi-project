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
                <Link to="/#PlansSection" children='go back'/>
            </header>
            <main className='payment-container'>
                <div className='plan-info'>
                    <div className='planPayment-title'>
                        <h2>{selectedPlan?.plan}</h2>
                    </div>
                    <div className='planPayment-description'>
                        <p>{selectedPlan?.saving}</p>
                        <p>{selectedPlan?.description}</p>
                    </div>
                </div>
                <div className='payment-section'>
                    <form>
                        <div className='form-field'>
                            <label htmlFor='cardNumber'>Card Number</label>
                            <input type='text' id='cardNumber'/>
                        </div>
                        <div className='form-field'>
                            <label htmlFor='cardName'>Card Name</label>
                            <input type='text' id='cardName'/>
                        </div>
                        <div className='form-field'>
                            <label htmlFor='expirationDate'>Expiration Date</label>
                            <input type='text' id='expirationDate'/>
                        </div>
                        <div className='form-field'>
                            <label htmlFor='cvv'>CVV</label>
                            <input type='text' id='cvv'/>
                        </div>
                        <div className='form-field'>
                            <input type="submit" value="Suscribirse"
                            className='submit-button'/>
                        </div>
                    </form>
                    <div className='planPayment-price'>
                        <h3><span>$</span>{selectedPlan?.price}<span>*</span></h3>
                        <p>* precios en $USD</p>
                    </div>
                </div>
            </main>
        </React.Fragment>
    )
}



