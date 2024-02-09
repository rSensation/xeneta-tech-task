import { FC } from 'react';
import classnames from 'classnames';

import { LineItem } from './types';

import classes from './LineChart.module.scss';

interface LegendProps {
  items: LineItem[];
  active: Record<string, boolean>;
  onClick?: (id: string) => void;
}

const Legend: FC<LegendProps> = ({ items, active, onClick }) => (
  <div className={classes.legend__container}>
    <h5>Market Position</h5>
    <ul>
      {items?.map(({ id, label, color }) => (
        <li
          key={id}
          className={classnames(classes.legend__item, {
            [classes.legend__item__inactive]: !active[id],
          })}
          onClick={() => onClick?.(id)}
        >
          <div
            className={classes.legend__circle}
            style={{ backgroundColor: color }}
          />
          <span>{label || id}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Legend;
