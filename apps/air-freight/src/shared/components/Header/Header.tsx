import { FC } from 'react';

import classes from './Header.module.scss';

interface HeaderProps {
  title?: string;
}

const Header: FC<HeaderProps> = ({ title }) => (
  <div className={classes.header}>
    {title && <h3>{title}</h3>}
  </div>
);

export default Header;
