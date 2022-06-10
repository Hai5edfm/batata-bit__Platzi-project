import { FC } from 'react';
import '@src/styles/components/ArrowTrend/index.scss'

type trendType = {
  trend: string,
}

export const ArrowTrend: FC<trendType> = ({trend}: trendType) => {

  return(
    <svg className={`${trend == "up" ? 'trend-up' : 'trend-down'}`} width="12" height="13" viewBox="0 0 12 13" fill="none">
      <path d="M11.5 9.5L6.75 4.75L4.25 7.25L0.5 3.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.5 9.5H11.5V6.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

