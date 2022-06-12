import { FC } from 'react';
type IsotypeSize = {
  width: number,
  height: number
}

export const MainIsotype: FC<IsotypeSize> = ({width, height}: IsotypeSize) => {
  return(
    <svg width={width} height={height} viewBox="0 0 41 24" fill="none">
      <path d="M16.8906 20.2838C10.4673 22.281 0.0927203 20.2399 0.000572001 11.3449C-0.0915763 2.44983 10.9806 7.74852 10.9806 7.74852L16.8906 20.2838Z" fill="#FFC250"/>
      <path d="M3.12363 6.35426C7.6066 5.58608 11.0113 11.5265 14.7783 17.7232C18.5452 23.92 28.3542 26.3762 34.6218 21.165C40.8893 15.9539 43.542 6.82713 35.8464 1.38317C28.1509 -4.06079 23.3471 8.29872 16.7221 8.63845C10.0972 8.97819 10.0489 4.05367 3.12363 6.35426Z" fill="#FFD064"/>
      <circle cx="35.1972" cy="11.6219" r="1.96745" fill="#FFE19D"/>
      <circle cx="31.4262" cy="13.0974" r="1.47559" fill="#FFE19D"/>
      <circle cx="34.0495" cy="15.0648" r="1.14768" fill="#FFE19D"/>
    </svg>
  );
};