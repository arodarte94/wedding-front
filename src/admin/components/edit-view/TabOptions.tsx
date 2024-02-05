import { SaveAltOutlined } from '@mui/icons-material'
import { Button, ButtonGroup } from '@mui/material'
import styles from "../../styles/app.module.scss";
import { setIsLoading } from '../../lib/appSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const TabOptions = ({save, link, del, children} : {save?: any, link?: any, del?: any, children?: React.ReactNode;}) => {

  const dispatcher = useDispatch();

  const handleSave = async () => {
    dispatcher(setIsLoading(true));
    await save();
    dispatcher(setIsLoading(false));
  }

  return (
    <ButtonGroup variant="contained" aria-label="loading button group" size="small" className={styles.mainButtonGroup}>
    { save && <Button startIcon={<SaveAltOutlined />} onClick={handleSave}>Guardar</Button> }
    {children}
    {link && <Link to={link}><Button variant="outlined">Regresar</Button></Link>}
  </ButtonGroup>
  )
}

export default TabOptions
