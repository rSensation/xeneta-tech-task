import Loader from '../Icons/Loader';

import classes from './LoaderScreen.module.scss';

const LoaderScreen = () => (
  <div className={classes.loader}>
    <Loader />
  </div>
);

export default LoaderScreen;
