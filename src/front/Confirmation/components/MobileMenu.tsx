import React from "react";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import SynagogueOutlinedIcon from "@mui/icons-material/SynagogueOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import styles from "../../styles/front.module.scss";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  return (
    <div className={styles.bottomMenu}>
      <div className={styles.bottomMenuOption}>
        <Link to="/">
          <HomeOutlinedIcon />
          <span>Inicio</span>
        </Link>
      </div>
      <div className={styles.bottomMenuOption}>
        <Link to="/#us">
          <FavoriteBorderOutlinedIcon />
          <span>Nosotros</span>
        </Link>
      </div>
      <div className={styles.bottomMenuOption}>
        <Link to="/#event">
          <SynagogueOutlinedIcon />
          <span>Evento</span>
        </Link>
      </div>
      <div className={styles.bottomMenuOption}>
        <Link to="/#rsvp">
          <MarkEmailReadOutlinedIcon />
          <span>RSVP</span>
        </Link>
      </div>
      <div className={styles.bottomMenuOption}>
        <Link to="/#gifts">
          <CardGiftcardOutlinedIcon />
          <span>Regalos</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
