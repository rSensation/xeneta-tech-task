import { Loader } from '../Icons';

import classes from './LoaderScreen.module.scss';

const LoaderScreen = () => (
  <div className={classes.loader}>
    <Loader />
  </div>
);

export default LoaderScreen;
