import styles from "../styles/front.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import SynagogueOutlinedIcon from "@mui/icons-material/SynagogueOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Button } from "@mui/material";
import { useParams, useLocation } from "react-router-dom";
import { getUserByCode } from "../../admin/users/actions";
import { User } from "../../admin/models/user.model";
import WhoWeAre from "./sections/WhoWeAre";
import HowWeMet from "./sections/HowWeMet";
import HowWeFell from "./sections/HowWeFell";
import MainCover from "./sections/MainCover";
import Schedule from "./sections/Schedule";
import Rsvp from "./sections/Rsvp";
import Gifts from "./sections/Gifts";

const Page = () => {
  const { id } = useParams();

  const [isMobile, setIsMobile] = useState(false);
  const [isAntonioOpen, setIsAntonioOpen] = useState(false);
  const [isNallelyOpen, setIsNallelyOpen] = useState(false);
  const [animationState, setAnimationState] = useState(`${styles.content}`);
  const [guest, setGuest] = useState<User | null>(null);
  const [currentSection, setCurrentSection] = useState<number>(0);
  const morritosRef = useRef(null);
  const usRef = useRef(null);
  const datesRef = useRef(null);
  const boditaRef = useRef(null);
  const rsvpRef = useRef(null);
  const giftsRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    resize();

    if (id) {
      getUserByCode(id, setGuest);
      animateSectionJump(boditaRef);
    }

    // Listen to hash changes
    const hash = location.hash;
    if (hash) {
      scrollToSection(hash);
    }
  }, [window.screen.width, location.hash]);

  const resize = () => {
    if (window.innerWidth <= 900) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const scrollToSection = (hash) => {
    const sectionRefMap = {
      "#us": usRef,
      "#event": boditaRef,
      "#rsvp": rsvpRef,
      "#gifts": giftsRef,
    };

    const ref = sectionRefMap[hash];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ block: "start" });
    }
  };

  const openMorritoPopover = (morrito) => {
    if (morrito) {
      setIsAntonioOpen(false);
      setIsNallelyOpen(true);
    } else {
      setIsAntonioOpen(true);
      setIsNallelyOpen(false);
    }
  };

  const animateSectionJump = (ref, section = 0) => {
    setTimeout(() => {
      setAnimationState(`${styles.content} ${styles.fadeIn}`);

      ref.current.scrollIntoView({
        block: "start", // You can adjust this value based on your needs ('start', 'center', 'end', or 'nearest')
      });
    }, 500);
    setCurrentSection(section);
    setAnimationState(`${styles.content} ${styles.fadeOut}`);
  };

  window.onresize = resize;

  return (
    <div className={styles.main}>
      <div className={styles.bottomMenu}>
        <div
          className={[
            styles.bottomMenuOption,
            currentSection === 0 ? styles.selected : "",
          ].join(" ")}
        >
          <Link onClick={() => animateSectionJump(morritosRef, 0)}>
            <HomeOutlinedIcon />
            <span>Inicio</span>
          </Link>
        </div>
        <div
          className={[
            styles.bottomMenuOption,
            currentSection === 1 ? styles.selected : "",
          ].join(" ")}
        >
          <Link onClick={() => animateSectionJump(usRef, 1)}>
            <FavoriteBorderOutlinedIcon />
            <span>Nosotros</span>
          </Link>
        </div>
        <div
          className={[
            styles.bottomMenuOption,
            currentSection === 2 ? styles.selected : "",
          ].join(" ")}
        >
          <Link onClick={() => animateSectionJump(boditaRef, 2)}>
            <SynagogueOutlinedIcon />
            <span>Evento</span>
          </Link>
        </div>
        <div
          className={[
            styles.bottomMenuOption,
            currentSection === 3 ? styles.selected : "",
          ].join(" ")}
        >
          <Link onClick={() => animateSectionJump(rsvpRef, 3)}>
            <MarkEmailReadOutlinedIcon />
            <span>RSVP</span>
          </Link>
        </div>
        <div
          className={[
            styles.bottomMenuOption,
            currentSection === 4 ? styles.selected : "",
          ].join(" ")}
        >
          <Link onClick={() => animateSectionJump(giftsRef, 4)}>
            <CardGiftcardOutlinedIcon />
            <span>Regalos</span>
          </Link>
        </div>
      </div>
      <div className={styles.sideMenu}>
        <div className={styles.menuTitle}>
          <Link to="/confirmation">
            <Button className={styles.mainConfirm} variant="outlined">
              CONFIRMAR
            </Button>
          </Link>
        </div>
        <ul>
          <li>
            <Link onClick={() => animateSectionJump(morritosRef, 0)}>
              Inicio
            </Link>
          </li>
          <li>
            <Link onClick={() => animateSectionJump(usRef, 1)}>Nosotros</Link>
          </li>
          <li>
            <Link onClick={() => animateSectionJump(boditaRef, 2)}>Evento</Link>
          </li>
          <li>
            <Link onClick={() => animateSectionJump(rsvpRef, 3)}>RSVP</Link>
          </li>
          <li>
            <Link onClick={() => animateSectionJump(giftsRef, 4)}>Regalos</Link>
          </li>
        </ul>
      </div>
      <div ref={morritosRef} className={animationState}>
        <MainCover isMobile={isMobile} />
        <div ref={usRef} className={styles.whoAreWe}>
          <WhoWeAre
            isAntonioOpen={isAntonioOpen}
            isNallelyOpen={isNallelyOpen}
            openPopover={openMorritoPopover}
          />
        </div>
        <section ref={datesRef} className={styles.dates}>
          <HowWeMet />
          <HowWeFell />
        </section>
        <section className={styles.totalDates}></section>
        {/* Section 4: La bodita */}
        <div ref={boditaRef} className={styles.bodita}>
          <Schedule />
        </div>
        <section ref={rsvpRef} className={styles.rsvp}>
          <Rsvp />
        </section>
        <div ref={giftsRef} className={styles.gifts} id="gifts">
          <Gifts />
        </div>
        <section className={styles.footer}>
          <p>Made with ❤️ by Antonio & Nallely</p>
        </section>
      </div>
    </div>
  );
};
export default Page;
