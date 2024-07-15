import { Button } from "@mui/material";
import styles from "../../styles/front.module.scss";
import CelebrationIcon from "@mui/icons-material/Celebration";

const MainCover = ({ isMobile }) => {
  const isIOS =
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream; // Check if user agent indicates iOS

  return (
    <>
      <div
        className={styles.morritosMainCover}
        style={{ backgroundAttachment: isIOS ? "scroll" : "fixed" }}
      >
        <div className={styles.mainCoverOverlay}>
          <div className={styles.mainCoverText}>
            {isMobile ? (
              <img
                src="mainLabelMobile.png"
                alt=""
                className={styles.mobileLabel}
              />
            ) : (
              <img src="mainLabel.png" alt="" />
            )}
            <Button
              variant="contained"
              startIcon={<CelebrationIcon />}
              className={styles.mainCoverConfirmButton}
            >
              Confirmar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCover;
