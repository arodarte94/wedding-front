import { Grid, Skeleton } from '@mui/material';
import styles from '../../styles/app.module.scss';

const PageLoader = () => {
  return (
    <div className={styles.pageLoader}>
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} height={60} />
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Skeleton variant="rectangular" width={'100%'} height={500} />
        </Grid>
        <Grid item xs={9}>
          <Skeleton variant="rectangular" width={'100%'} height={500} />
        </Grid>
        <Grid item xs={12}>
          <Skeleton variant="rectangular" width={'100%'} height={100} />
        </Grid>
      </Grid>
    </div>
  );
};

export default PageLoader;
