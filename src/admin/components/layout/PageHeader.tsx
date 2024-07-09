import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { Add } from '@mui/icons-material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import styles from '../../styles/tables.module.scss';

interface tableOptionsProps {
  title?: string;
  editButton?: { link: string; label: string };
  deleteButton?: { fn: any; label: string; active: boolean };
  children?: React.ReactNode;
}

const PageHeader = ({
  title,
  editButton,
  deleteButton,
  children,
}: tableOptionsProps) => {
  return (
    <Grid
      container
      sx={{ backgroundColor: 'white', paddingLeft: 2, paddingRight: 2 }}
    >
      <Grid item lg={6} xs={12}>
        <h3>{title}</h3>
      </Grid>
      <Grid
        container
        lg={6}
        xs={12}
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end"
        marginBottom={2}
        className={styles.PageHeader}
      >
        {children}
        {deleteButton?.active && (
          <Button
            startIcon={<DeleteOutlineIcon />}
            variant="contained"
            color="error"
            onClick={deleteButton.fn}
          >
            {deleteButton.label}
          </Button>
        )}
        {editButton && (
          <Link to={editButton.link}>
            <Button startIcon={<Add />} variant="contained">
              {editButton.label}
            </Button>
          </Link>
        )}
      </Grid>
    </Grid>
  );
};

export default PageHeader;
