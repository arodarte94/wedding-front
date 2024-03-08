import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box } from "@mui/material";
import styles from "../../styles/front.module.scss";

const WhoWeAre = ({ ref, isAntonioOpen, isNallelyOpen, openPopover }) => {
  return (
    <div ref={ref} className={styles.whoAreWe}>
      <h1>Esto es lo que somos...</h1>
      <Box
        className={styles.morritoDialog + " " + styles.tumblus}
        visibility={isAntonioOpen ? "" : "hidden"}
      >
        <h4>Antonio</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio illo
          totam hic magnam ab laudantium cupiditate dignissimos rerum obcaecati!
          Fuga fugit architecto suscipit eveniet aperiam reiciendis, vitae
          recusandae vel unde!
        </p>
      </Box>
      <Box
        className={styles.morritoDialog + " " + styles.nallely}
        visibility={isNallelyOpen ? "" : "hidden"}
      >
        <h4>Nallely</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio illo
          totam hic magnam ab laudantium cupiditate dignissimos rerum obcaecati!
          Fuga fugit architecto suscipit eveniet aperiam reiciendis, vitae
          recusandae vel unde!
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
    </div>
  );
};

export default WhoWeAre;
