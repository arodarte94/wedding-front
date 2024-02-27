import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles/front.module.scss";
import "./styles/countdown.scss";
import { tick } from "./stores/weddingStore";

const SaveTheDate = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    resize();
  }, [window.screen.width]);

  const resize = () => {
    if (window.innerWidth <= 900) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  window.onresize = resize;

  return (
    <div className={styles.main}>
      <div className={styles.content + " " + styles.saveTheDate}>
        <CountDown />
        <div className={styles.morritosMainCover}>
          <div className={styles.mainCoverOverlay}>
            <div className={styles.mainCoverText}>
              {isMobile ? (
                <img
                  src="/wedding-front/mainLabelMobile.png"
                  alt=""
                  className={styles.mobileLabel}
                />
              ) : (
                <img src="/wedding-front/mainLabel.png" alt="" />
              )}
            </div>
          </div>

          {!isMobile && (
            <div className={styles.date}>
              <img src="/wedding-front/Fecha.png" alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CountDown = () => {
  const { time } = useSelector((state) => state.wedding);
  const dispatcher = useDispatch();

  useEffect(() => {
    let timerInterval = setInterval(() => {
      dispatcher(tick());
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <div className="countdownContainer">
      <div className="countdown">
        <div className="countdownElem">
          <Flipper number={time.days} />
          <div class="countdownLabel">Dias</div>
        </div>
        <div className="countdownElem">
          <Flipper number={time.hours} />
          <div class="countdownLabel">Horas</div>
        </div>
        <div className="countdownElem">
          <Flipper number={time.minutes} />
          <div class="countdownLabel">Minutos</div>
        </div>
        <div className="countdownElem">
          <Flipper number={time.seconds} />
          <div class="countdownLabel">Segundos</div>
        </div>
      </div>
    </div>
  );
};

const Flipper = ({ number }) => {
  return (
    <>
      {number < 10 && <span className="countdownDigit">0</span>}
      {number
        .toString()
        .split("")
        .map((char) => {
          return <span className="countdownDigit">{char}</span>;
        })}
    </>
  );
};

export default SaveTheDate;