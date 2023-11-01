import classes from './loader.module.scss';
const LoadingSpinner = () => {
  return (
    <div className={classes.spinner_container}>
      <div className={classes.loading_spinner}></div>
    </div>
  );
};

export default LoadingSpinner;
