import { useRef } from "react";
import styles from "../../styles/front.module.scss";
import MatchImg from "../../../img/match.png";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import { Box, Typography } from "@mui/material";

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
        <div
          className={styles.collapsableOverlay + " " + styles.pink}
          ref={howWeMetRef}
        >
          <div
            className={styles.collapsableOverlayButton + " " + styles.close}
            onClick={() => toggleCollapsable(howWeMetRef, false)}
          >
            <ClearIcon />
          </div>
          <h1>¿Cómo nos conocimos?</h1>
          <p>
            ¡Nos conocimos en <b>Bumble</b>!<br />
            <br />
            En diciembre del 2021, ambos nos encontrábamos activos en Bumble,
            una aplicación de citas muy conocida. Como cualquier otra aplicación
            de citas, las personas deben de hacer "match" para poder iniciar una
            conversación.
            <br />
            <br />
            Al empezar a platicar, hubo una conexión inmediata que ambos
            disfrutamos mucho. Hablábamos por horas en diferentes niveles de
            profundidad. Pronto la conversación migró a WhatsApp y la longitud
            de las conversaciones sólo aumentaba.
            <br />
            <br />
            El COVID nos impidió conocernos durante un par de semanas, hasta que
            el 13 de enero del 2022 tuvimos nuestra primera cita en Basilico, un
            restaurante italiano en Juárez, en el cual nos estuvimos hasta la
            hora de cierre del lugar.
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
            ¡Nos conocimos en{" "}
            <Typography
              fontWeight={"bold"}
              fontSize={"20px !important"}
              display={"inline"}
            >
              Bumble
            </Typography>
            !<br />
            <br />
            En diciembre del 2021, ambos nos encontrábamos activos en Bumble,
            una aplicación de citas muy conocida. Como cualquier otra aplicación
            de citas, las personas deben de hacer "match" para poder iniciar una
            conversación.
            <br />
            <br />
            Al empezar a platicar, hubo una conexión inmediata que ambos
            disfrutamos mucho. Hablábamos por horas en diferentes niveles de
            profundidad. Pronto la conversación migró a WhatsApp y la longitud
            de las conversaciones sólo aumentaba.
            <br />
            <br />
            El COVID nos impidió conocernos durante un par de semanas, hasta que
            el 13 de enero del 2022 tuvimos nuestra primera cita en Basilico, un
            restaurante italiano en Juárez, en el cual nos estuvimos hasta la
            hora de cierre del lugar.
          </p>
        </div>
        <div className={styles.floatingTitle}>
          Primer
          <br /> <Box sx={{ fontSize: "120px" }}>Mensaje</Box>
        </div>
      </div>
    </div>
  );
};

export default HowWeMet;
