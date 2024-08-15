import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box } from "@mui/material";
import styles from "../../styles/front.module.scss";

const WhoWeAre = ({ isAntonioOpen, isNallelyOpen, openPopover }) => {
  return (
    <>
      <Box
        className={styles.morritoDialog + " " + styles.tumblus}
        visibility={isAntonioOpen ? "" : "hidden"}
      >
        <h3 style={{ color: "#FFF" }}>Antonio</h3>
        <p>
          Software Engineer, 30 años. <br />
          Disfruta mucho jugar videojuegos y tomar caminatas nocturnas. Su
          botana favorita son las palomitas con salsa valentina y limón.
          <br />
          <br />
          Su persona favorita es Nallely.
        </p>
      </Box>
      <Box
        className={styles.morritoDialog + " " + styles.nallely}
        visibility={isNallelyOpen ? "" : "hidden"}
      >
        <h3 style={{ color: "#FFF" }}>Nallely</h3>
        <p>
          E-commerce specialist, 29 años. <br />
          Ser mamá de Jade es su título más importante. Le encantan las
          manualidades y viajar por el mundo. Su botana favorita son los doritos
          con queso. <br />
          <br />
          Su persona favorita es Antonio.
        </p>
      </Box>
      <div className={styles.hearts}>
        <div className={styles.heartButton} onClick={() => openPopover(false)}>
          <FavoriteIcon />
        </div>
        <div className={styles.heartButton} onClick={() => openPopover(true)}>
          <FavoriteIcon />
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
