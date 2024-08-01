import React from "react";
import styles from "../styles/front.module.scss";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const WeddingConfirmation = () => {
  return (
    <div className={styles.main}>
      <div className={styles.sideMenu}>
        <div className={styles.menuTitle}>
          <Link to="/">
            <Button className={styles.mainConfirm} variant="outlined">
              REGRESAR
            </Button>
          </Link>
        </div>
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
      </div>
    </div>
  );
};

export default WeddingConfirmation;
