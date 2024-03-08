import { useRef } from 'react'
import styles from "../../styles/front.module.scss";
import MatchImg from "../../../img/match.png";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ClearIcon from "@mui/icons-material/Clear";

const HowWeMet = () => {

    const isIOS =
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream; // Check if user agent indicates iOS

    const howWeMetRef = useRef(null);
    
    const toggleCollapsable = (ref, toggle) => {
        if (toggle) {
          setTimeout(() => {
            ref.current.style.height = "943px";
          }, 200);
        } else ref.current.style.height = "0px";
      };

  return (
    <div className={styles.date}>
    <div
      className={styles.leftColumn}
      style={{
        backgroundImage: "url(" + MatchImg + ")",
        zIndex: 2,
        backgroundAttachment: isIOS ? "scroll" : "fixed",
      }}
    >
      <div className={styles.collapsableOverlay} ref={howWeMetRef}>
        <div
          className={
            styles.collapsableOverlayButton + " " + styles.close
          }
          onClick={() => toggleCollapsable(howWeMetRef, false)}
        >
          <ClearIcon />
        </div>
        <h1>¿Cómo nos conocimos?</h1>
        <p>
          ¡Las aplicaciones de citas si funcionan! Hicimos “match” en
          Bumble, alrededor del 18 de Diciembre del 2021. En esta
          aplicación la mujer tiene que enviar el primer mensaje durante
          un periodo de 24 horas, de lo contrario pierdes tu oportunidad
          y la persona desaparece.
          <br />
          <br />
          Casi al llegar al límite de las 24 horas, Antonio presiona el
          botón de emergencia el cual le daba otras 24 horas a Nallely
          para enviarle un mensaje. Intrigada por tal acción el 20 de
          Diciembre, Nallely envía a Antonio el clásico “Hola ¿cómo
          estas?”
        </p>
      </div>

      <div
        className={styles.collapsableOverlayButton}
        onClick={() => toggleCollapsable(howWeMetRef, true)}
      >
        <FavoriteBorderOutlinedIcon />
        <span>¿Cómo nos conocimos?</span>
      </div>
    </div>

    <div className={styles.rightColumn}>
      <div className={styles.dateContent}>
        <p>
          ¡Las aplicaciones de citas si funcionan! Hicimos “match” en
          Bumble, alrededor del 18 de Diciembre del 2021. En esta
          aplicación la mujer tiene que enviar el primer mensaje durante
          un periodo de 24 horas, de lo contrario pierdes tu oportunidad
          y la persona desaparece.
          <br />
          <br />
          Casi al llegar al límite de las 24 horas, Antonio presiona el
          botón de emergencia el cual le daba otras 24 horas a Nallely
          para enviarle un mensaje. Intrigada por tal acción el 20 de
          Diciembre, Nallely envía a Antonio el clásico “Hola ¿cómo
          estas?”
        </p>

        <p>
          ¡Las aplicaciones de citas si funcionan! Hicimos “match” en
          Bumble, alrededor del 18 de Diciembre del 2021. En esta
          aplicación la mujer tiene que enviar el primer mensaje durante
          un periodo de 24 horas, de lo contrario pierdes tu oportunidad
          y la persona desaparece.
          <br />
          <br />
          Casi al llegar al límite de las 24 horas, Antonio presiona el
          botón de emergencia el cual le daba otras 24 horas a Nallely
          para enviarle un mensaje. Intrigada por tal acción el 20 de
          Diciembre, Nallely envía a Antonio el clásico “Hola ¿cómo
          estas?”
        </p>
      </div>
    </div>
  </div>
  )
}

export default HowWeMet