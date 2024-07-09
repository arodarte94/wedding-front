import { CircularProgress } from '@mui/material';
import styles from '../../styles/app.module.scss';

const LoadingBackdrop = () => {
  return (
    <div className={styles.loading}>
      <CircularProgress />
    </div>
  );
};

export default LoadingBackdrop;
