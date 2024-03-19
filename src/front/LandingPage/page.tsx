import styles from "../styles/front.module.scss";
import { Link } from "react-scroll";
import { useEffect, useRef, useState } from "react";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import SynagogueOutlinedIcon from "@mui/icons-material/SynagogueOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { getUserByCode } from "../../admin/users/actions";
import { User } from "../../admin/models/user.model";
import WhoWeAre from "./sections/WhoWeAre";
import HowWeMet from "./sections/HowWeMet";
import HowWeFell from "./sections/HowWeFell";
import MainCover from "./sections/MainCover";

const Page = () => {
  const isIOS =
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream; // Check if user agent indicates iOS

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

  useEffect(() => {
    resize();

    if (id) {
      getUserByCode(id, setGuest);
      animateSectionJump(boditaRef);
    }
  }, [window.screen.width]);

  const resize = () => {
    if (window.innerWidth <= 900) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
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
    if (section === currentSection) return;

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
          <Link onClick={() => animateSectionJump(morritosRef, 4)}>
            <CardGiftcardOutlinedIcon />
            <span>Regalos</span>
          </Link>
        </div>
      </div>
      <div className={styles.sideMenu}>
        <div className={styles.menuTitle}>
          <Button className={styles.mainConfirm} variant="outlined">
            CONFIRMAR
          </Button>
        </div>
        <ul>
          <li>
            <Link onClick={() => animateSectionJump(morritosRef)}>Inicio</Link>
          </li>
          <li>
            <Link onClick={() => animateSectionJump(usRef)}>Nosotros</Link>
          </li>
          <li>
            <Link onClick={() => animateSectionJump(boditaRef)}>Evento</Link>
          </li>
          <li>
            <Link onClick={() => animateSectionJump(rsvpRef)}>RSVP</Link>
          </li>
          <li>
            <Link onClick={() => animateSectionJump(morritosRef)}>Regalos</Link>
          </li>
        </ul>
        {/* <div className={styles.menuFooter}>03.11.2024</div> */}
      </div>
      <div ref={morritosRef} className={animationState}>
        {/* Section 1: Main morritos cover page */}
          <MainCover isMobile={isMobile}/>
        {/* 
        <section className={styles.mainDivider}>
          <h1 className={styles.bumble}>
            Simón, los rumores son ciertos, <br />
            nos conocimos en <b>Bumble.</b>
          </h1>
          <img src="/wedding-front/mainJade.png" alt="" />
        </section> */}
        <div ref={usRef} className={styles.whoAreWe}>
        <WhoWeAre
            isAntonioOpen={isAntonioOpen}
            isNallelyOpen={isNallelyOpen}
            openPopover={openMorritoPopover}
          />
        </div>
        {/* Section 2: Quienes son los morritos */}
        {/* <section  className={styles.us}>
          <div className={styles.title}>
            <p className={styles.hint}>Amor en tiempos del coví</p>
            <h1>La rara del salón se casó con el popu</h1>
          </div>

          <hr />
          <div className={styles.presentation}>
            <div>
              <p>
                <h3>Antonio</h3>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
                aut porro nam explicabo incidunt accusantium perspiciatis vero,
                deserunt minus quo praesentium corrupti, ratione quod
                reprehenderit similique beatae? Alias, temporibus dolore?
              </p>
            </div>
            <div>
              <img src="/wedding-front/presentation.png" alt="" />
            </div>
            <div>
              <p>
                <h3>Nallely</h3>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
                aut porro nam explicabo incidunt accusantium perspiciatis vero,
                deserunt minus quo praesentium corrupti, ratione quod
                reprehenderit similique beatae? Alias, temporibus dolore?
              </p>
            </div>
          </div>
          <h1 className={styles.bumble}>
            Y simón, los rumores son ciertos, nos conocimos en <b>Bumble.</b>
          </h1>
          <hr />
        </section> */}

        {/* Section 3: Dates */}
        {/* 
        <section className={styles.mainDivider}>
          <h1 className={styles.bumble}>
            Nuestra historia <br />
            juntos
          </h1>
          <img src="/wedding-front/mainJade.png" alt="" />
        </section> */}
        <section ref={datesRef} className={styles.dates}>
        <HowWeMet />
        <HowWeFell />
        </section>
        <section className={styles.totalDates}>
          En total, nos hemos visto en <b>384 ocasiones</b>
          <br />Y ahora vamos por toda una vida.
        </section>
        {/* Section 4: La bodita */}
        <section ref={boditaRef} className={styles.bodita}>
          <h1>La bodita</h1>
          <div className={styles.boditaCards}>
            <div className={styles.card}>
              <h1>La misa</h1>
              <hr />
              <p>Salón jardín Cibeles</p>
              <p>
                Bulevar Tomás Fernández 8450, Partido Senecú, 32540 Cd Juárez,
                Chih.
              </p>
              <p>9:00 PM a 2:00 PM</p>
              <p>Cena a las 9:15 PM</p>
              <a href="#">Ver en Google Maps</a>
            </div>
            <div className={styles.card}>
              <h1>La peda</h1>
              <hr />
              <p>Salón jardín Cibeles</p>
              <p>
                Bulevar Tomás Fernández 8450, Partido Senecú, 32540 Cd Juárez,
                Chih.
              </p>
              <p>9:00 PM a 2:00 PM</p>
              <p>Cena a las 9:15 PM</p>
              <a href="#">Ver en Google Maps</a>
            </div>
          </div>
        </section>
        {/* Section 5: RSVP */}
        <section ref={rsvpRef} className={styles.rsvp}>
          <h1> Guest: {guest ? guest.name : ""}</h1>
        </section>
        <section className={styles.footer}>
          <p>Made with ❤️ by Antonio & Nallely</p>
        </section>
      </div>
    </div>
  );
};
export default Page;
