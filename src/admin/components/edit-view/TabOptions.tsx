import { SaveAltOutlined } from '@mui/icons-material';
import { Button, ButtonGroup } from '@mui/material';
import styles from '../../styles/app.module.scss';
import { setIsLoading } from '../../lib/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { RootState } from '../../store';

const TabOptions = ({
  save,
  link,
  del,
  children,
  customLabel,
}: {
  save?: any;
  link?: any;
  del?: any;
  children?: React.ReactNode;
  customLabel?: string;
}) => {
  const appState = useSelector((state: RootState) => state.app);
  const dispatcher = useDispatch();

  const handleSave = async () => {
    dispatcher(setIsLoading(true));
    try {
      await save();
    } catch {}
    dispatcher(setIsLoading(false));
  };

  return (
    <ButtonGroup
      variant="contained"
      aria-label="loading button group"
      size="small"
      className={styles.mainButtonGroup}
    >
      {del && (
        <Button color="error" startIcon={<DeleteOutlineIcon />} onClick={del}>
          Eliminar
        </Button>
      )}
      {save && (
        <Button
          startIcon={<SaveAltOutlined />}
          onClick={handleSave}
          disabled={appState.isLoading}
        >
          {customLabel ?? 'Guardar'}
        </Button>
      )}
      {children}
      {link && (
        <Link to={link}>
          <Button variant="outlined">Regresar</Button>
        </Link>
      )}
    </ButtonGroup>
  );
};

export default TabOptions;
