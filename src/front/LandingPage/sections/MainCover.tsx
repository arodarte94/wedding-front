import { Button } from "@mui/material";
import styles from "../../styles/front.module.scss";
import CelebrationIcon from "@mui/icons-material/Celebration";
import { Link } from "react-router-dom";

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
            <Link to="/confirmation">
              <Button
                variant="contained"
                startIcon={<CelebrationIcon />}
                className={styles.mainCoverConfirmButton}
              >
                Confirmar
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCover;
