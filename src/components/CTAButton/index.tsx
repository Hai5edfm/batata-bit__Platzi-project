import { FC } from 'react';
import { ArrowButton } from '@src/components/Icons/ArrowButton';
import '@src/styles/components/CTAButton/index.scss'

export const CTAButton: FC = () => {
  return (
    <a className='CTAButton' href='#pricing'>Conoce Nuestros Planes <span><ArrowButton rotate="bottom" color="#201E1C"/></span> </a>
  );
};
