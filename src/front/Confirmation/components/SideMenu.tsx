import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "../../styles/front.module.scss";

const SideMenu = () => {
  return (
    <Box className={styles.sideMenu}>
      <Box className={styles.menuTitle}>
        <Link to="/">
          <Button className={styles.mainConfirm} variant="outlined">
            REGRESAR
          </Button>
        </Link>
      </Box>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/#us">Nosotros</Link>
        </li>
        <li>
          <Link to="/#event">Evento</Link>
        </li>
        <li>
          <Link to="/#rsvp">RSVP</Link>
        </li>
        <li>
          <Link to="/#gifts">Regalos</Link>
        </li>
      </ul>
    </Box>
  );
};

export default SideMenu;
