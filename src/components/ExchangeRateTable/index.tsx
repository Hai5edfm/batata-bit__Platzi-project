import { FC } from 'react';
import { ArrowTrend } from '../ArrowTrend';
import '@src/styles/components/ExchangeRateTable/index.scss'

type ExchangeRateRow = {
  name: string,
  exchange?: string,
  commision?: string,
  trend?: string,
}
type ExchangeTableProps = {
  title: string,
  rows: ExchangeRateRow[]
}

export const ExchangeRateTable: FC<ExchangeTableProps> = ({title, rows}: ExchangeTableProps) => {
  return(
    <table>
      <thead className={`${title}-table__header`}>
          <tr>
            <th>{title}</th>
          </tr>
      </thead>
      <tbody>
        {rows.map(row => (
          <tr key={row.name}>
            <td className='table__name'>{row.name}</td>
            {row.exchange !== undefined && <td>${row.exchange}</td>}
            {row.trend !== undefined && <td><ArrowTrend trend={row.trend}/></td>}
            {row.commision !== undefined && <td>${row.commision}</td>}
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td className={`${title}-table__footer`}>
            Valores en <strong>$ USD</strong>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};
