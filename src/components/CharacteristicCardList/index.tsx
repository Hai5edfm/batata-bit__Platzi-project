import { FC } from 'react';
import { CharacteristicCard } from '../CharacteristicCard';
import { ClockIcon } from '../Icons/ClockIcon';
import { DollarIcon } from '../Icons/DollarIcon';
import { EyeIcon } from '../Icons/EyeIcon';
import { CheckCircleIcon } from '../Icons/CheckCircleIcon';
import '@src/styles/components/CharacteristicsList/index.scss'

export const CharacteristicCardList: FC = () => {
  const characteristics = [
    { Icon: ClockIcon, title: "Tiempo real", info: "Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento."},
    { Icon: EyeIcon, title: "No hay tasas escondidas", info: "Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo."},
    { Icon: DollarIcon, title: "Compara monedas", info: "No más rumores, con Babtabit sabrás el valor real de cada moneda en el mercado actual."},
    { Icon: CheckCircleIcon, title: "Información confiableInformación confiable", info: "Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan."}
  ]
  return(
    <article className='characteristic__card--List'>
      {characteristics.map(({Icon, title, info}) => (
        <CharacteristicCard key={title} Icon={Icon} title={title} info={info}/>
      ))}
    </article>
  );
}

