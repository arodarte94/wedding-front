import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import stylesSDD from "./styles/saveTheDate.module.scss";
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
    <div className={stylesSDD.main}>
      <div className={stylesSDD.content + " " + stylesSDD.saveTheDate}>
        <CountDown />
        <div className={stylesSDD.morritosMainCover}>
          <div className={stylesSDD.mainCoverOverlay}>
            <div className={stylesSDD.mainCoverText}>
              {isMobile ? (
                <img
                  src="saveTheDate.png"
                  alt=""
                  className={stylesSDD.mobileLabel}
                />
              ) : (
                <img src="saveTheDateDesktop.png" alt="" />
              )}
            </div>
          </div>
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
