import { MainIsotype } from '@src/components/Icons/MainIsotype';
import { FC } from 'react';
import '@src/styles/containers/Footer/index.scss';

export const Footer: FC = () => {
  return (
    <footer>
      <ul>
        <li><a href='#'>Linkedin</a></li>
        <li><a href='#'>Crunchbase</a></li>
        <li><a href='#'>Hackernews</a></li>
      </ul>
      <div>
        <MainIsotype width={40} height={24}></MainIsotype>
        <p>* Batatabit 2020</p>
      </div>

    </footer>
  );
};
