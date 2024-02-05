import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { Add } from "@mui/icons-material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import styles from '../../styles/tables.module.scss'

interface tableOptionsProps {
  editButton?: { link: string; label: string };
  deleteButton?: { fn: any; label: string; active: boolean };
  children?: React.ReactNode;
}

const TableOptions = ({
  editButton,
  deleteButton,
  children,
}: tableOptionsProps) => {
  return (
    <Grid
      container
      item
      xs={12}
      direction="row"
      justifyContent="flex-end"
      alignItems="flex-end"
      marginBottom={2}
      className={styles.tableOptions}
    >
      {children}
      {deleteButton?.active && (
        <Button startIcon={<DeleteOutlineIcon />} variant="contained" color="error"
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
  );
};

export default TableOptions;
