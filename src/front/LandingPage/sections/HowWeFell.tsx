import { useEffect, useRef, useState } from "react";
import styles from "../../styles/front.module.scss";
import MasonryImg from "../../../img/masonry.png";
import MasonryImgMobile from "../../../img/masonryMobile.png";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import { Box, Typography } from "@mui/material";

const HowWeFell = () => {
  const isIOS =
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream; // Check if user agent indicates iOS

  const howWeFellRef = useRef(null);
  const [backgroundImg, setBackgroundImg] = useState(MasonryImg);

  useEffect(() => {
    resize();
  }, [window.screen.width]);

  const resize = () => {
    if (window.innerWidth <= 600) {
      setBackgroundImg(MasonryImgMobile);
    } else {
      setBackgroundImg(MasonryImg);
    }
  };

  window.onresize = resize;

  const toggleCollapsable = (ref, toggle) => {
    if (toggle) {
      setTimeout(() => {
        ref.current.style.height = "943px";
      }, 200);
    } else ref.current.style.height = "0px";
  };

  return (
    <>
      <div className={styles.date}>
        <div
          className={styles.leftColumn}
          style={{
            backgroundImage: "url(" + backgroundImg + ")",
            zIndex: 3,
            backgroundAttachment: isIOS ? "scroll" : "fixed",
          }}
        >
          <div className={styles.collapsableOverlay} ref={howWeFellRef}>
            <div
              className={styles.collapsableOverlayButton + " " + styles.close}
              onClick={() => toggleCollapsable(howWeFellRef, false)}
            >
              <ClearIcon />
            </div>
            <h1>¿Cómo nos enamoramos?</h1>

            <p>
            Como cada pareja, nuestra historia también ha visto altas, bajas, mucho amor, momentos de risas y momentos de mucha seriedad, ha sido un aprendizaje maravilloso que siempre estaremos felices de platicarte con un vinito y, por supuesto, nada nos haría más felices que celebrarlo contigo el día de nuestra boda.<br /><br />
            </p>
          </div>

          <div
            className={styles.collapsableOverlayButton}
            onClick={() => toggleCollapsable(howWeFellRef, true)}
          >
            <FavoriteBorderOutlinedIcon />
            <span>¿Cómo nos enamoramos?</span>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.dateContent}>
          <p>
            Nuestro noviazgo comenzó en la cita número 8, la cual sucedió el 9 de marzo del 2022. Nallely vivía en el Paso, Antonio en Juárez, alternábamos mucho nuestras citas entre una ciudad y la otra.
            <br/><br/>
            Como los nerds que somos, tenemos un Excel en donde mantenemos una bitácora de todas las citas que hemos tenido, podemos encontrar nuestra historia de amor ahí con cosas como:
            <ul>
              <li>Cita #32: Antonio se quedó encerrado en su casa, Nallely lo fue a visitar con unas mangoneadas mientras llegaba el cerrajero</li>
              <li>Cita #60: Antonio comió comida coreana por primera vez, llevamos a nuestra perrita Jade a un juego de béisbol</li>
              <li>Cita #130: Buscarle un doctor a Nallely en Guadalajara en medio de un viaje (le dió una alergia medio rara)</li>
              <li>Cita #204: Fuimos a una carrera en el Chamizal en donde podíamos llevar perritos </li>
              <li>Cita #262: Hicimos el mandado y ya</li>
              <li>Cita #333: Descubrimos un lugar de arepas colombianas delicioso</li>
            </ul>
          </p>
          </div>
          <div className={styles.floatingTitle}>
            Primeros
            <br /> <Box sx={{ fontSize: "120px" }}>Pasos</Box>
          </div>
        </div>
      </div>

      <div className={styles.date + " " + styles.hideOnMobile}>
        <div
          className={styles.leftColumn}
          style={{
            backgroundImage: "url(" + backgroundImg + ")",
            backgroundAttachment: isIOS ? "scroll" : "fixed",
          }}
        ></div>
        <div className={styles.rightColumn}>
          <div className={styles.dateContent}>
            <p>

            Nallely tuvo un viaje de trabajo en Mérida, viaje al cual Antonio fue de sorpresa para pedirle matrimonio a Nallely (Nallely jura que ya se las olía). Esta fue nuestra cita número 295, el 30 de agosto del 2023. Terminamos tomando unas copitas de vino en un bar llamado "Piensa Rosa", ¡Si alguna vez vas a Mérida, te lo recomendamos mucho! <br /><br />

            Nuestra boda civil ocurrió el 3 de noviembre del 2023, nuestra cita número 336. Como personas que aman viajar, celebramos con un tour a Sudamérica el cual incluyó Colombia, Argentina, Uruguay y Cancún (Sí, el dinero se nos va en viajes). <br /><br />

            Como cada pareja, nuestra historia también ha visto altas, bajas, mucho amor, momentos de risas y momentos de mucha seriedad, ha sido un aprendizaje maravilloso que siempre estaremos felices de platicarte con un vinito y, por supuesto, nada nos haría más felices que celebrarlo contigo el día de nuestra boda.<br /><br />
            </p>
          </div>
          <div className={styles.floatingTitle}>
            Camino
            <br />
            <Box sx={{ fontSize: "120px" }}>Al Altar</Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowWeFell;
