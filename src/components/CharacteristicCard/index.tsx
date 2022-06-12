import { FC } from 'react';

type CardProps = {
  Icon: FC,
  title: string,
  info: string
}

export const CharacteristicCard: FC<CardProps> = ({Icon, title, info}:CardProps) => {
  return(
    <div className='characteristics__card-container'>
      <Icon/>
      <h4>{title}</h4>
      <p>{info}</p>
    </div>
  );
};
