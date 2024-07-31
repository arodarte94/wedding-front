import { useEffect, useRef, useState } from "react";
import styles from "../../styles/front.module.scss";
import MasonryImg from "../../../img/masonry.png";
import MasonryImgMobile from "../../../img/masonryMobile.png";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import { Box } from "@mui/material";

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
              ¡Las aplicaciones de citas si funcionan! Hicimos “match” en
              Bumble, alrededor del 18 de Diciembre del 2021. En esta aplicación
              la mujer tiene que enviar el primer mensaje durante un periodo de
              24 horas, de lo contrario pierdes tu oportunidad y la persona
              desaparece.
              <br />
              <br />
              Casi al llegar al límite de las 24 horas, Antonio presiona el
              botón de emergencia el cual le daba otras 24 horas a Nallely para
              enviarle un mensaje. Intrigada por tal acción el 20 de Diciembre,
              Nallely envía a Antonio el clásico “Hola ¿cómo estas?”
              <br />
              <br />
              Casi al llegar al límite de las 24 horas, Antonio presiona el
              botón de emergencia el cual le daba otras 24 horas a Nallely para
              enviarle un mensaje. Intrigada por tal acción el 20 de Diciembre,
              Nallely envía a Antonio el clásico “Hola ¿cómo estas?”
              <br />
              <br />
              Casi al llegar al límite de las 24 horas, Antonio presiona el
              botón de emergencia el cual le daba otras 24 horas a Nallely para
              enviarle un mensaje. Intrigada por tal acción el 20 de Diciembre,
              Nallely envía a Antonio el clásico “Hola ¿cómo estas?”
              <br />
              <br />
              Casi al llegar al límite de las 24 horas, Antonio presiona el
              botón de emergencia el cual le daba otras 24 horas a Nallely para
              enviarle un mensaje. Intrigada por tal acción el 20 de Diciembre,
              Nallely envía a Antonio el clásico “Hola ¿cómo estas?”
              <br />
              <br />
              Casi al llegar al límite de las 24 horas, Antonio presiona el
              botón de emergencia el cual le daba otras 24 horas a Nallely para
              enviarle un mensaje. Intrigada por tal acción el 20 de Diciembre,
              Nallely envía a Antonio el clásico “Hola ¿cómo estas?”
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Explicabo, officiis, inventore labore culpa odit earum assumenda
              vitae expedita laborum quis quibusdam impedit amet quidem,
              obcaecati modi. Debitis qui esse illo?
              <br />
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus illum tempore nisi debitis vitae officia repudiandae
              odio cupiditate et quos voluptatibus, neque libero dolor magni,
              perspiciatis vero fuga? Necessitatibus, expedita.
              <br /> <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus illum tempore nisi debitis vitae officia repudiandae
              odio cupiditate et quos voluptatibus, neque libero dolor magni,
              perspiciatis vero fuga? Necessitatibus, expedita.
            </p>
          </div>
          <div className={styles.floatingTitle}>
            Primeros
            <br /> <Box sx={{ fontSize: "150px" }}>Pasos</Box>
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Explicabo, officiis, inventore labore culpa odit earum assumenda
              vitae expedita laborum quis quibusdam impedit amet quidem,
              obcaecati modi. Debitis qui esse illo?
              <br />
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus illum tempore nisi debitis vitae officia repudiandae
              odio cupiditate et quos voluptatibus, neque libero dolor magni,
              perspiciatis vero fuga? Necessitatibus, expedita.
            </p>
          </div>
          <div className={styles.floatingTitle}>
            Camino
            <br />
            <Box sx={{ fontSize: "150px" }}>Al Altar</Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowWeFell;
