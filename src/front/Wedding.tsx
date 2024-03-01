import styles from "./styles/front.module.scss";
import { Link } from "react-scroll";
import { useEffect, useRef, useState } from "react";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import SynagogueOutlinedIcon from "@mui/icons-material/SynagogueOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Box, Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useParams } from "react-router-dom";
import MatchImg from "../img/match.png";
import MasonryImg from "../img/masonry.png";
import ClearIcon from '@mui/icons-material/Clear';
import { getUserByUuid } from "../admin/users/actions";
import { User } from "../admin/models/user.model";

const Wedding = () => {
  const { id } = useParams();

  const [isMobile, setIsMobile] = useState(false);
  const [isAntonioOpen, setIsAntonioOpen] = useState(false);
  const [isNallelyOpen, setIsNallelyOpen] = useState(false);
  const [animationState, setAnimationState] = useState(`${styles.content}`);
  const [guest, setGuest] = useState<User|null>(null);

  const morritosRef = useRef(null);
  const usRef = useRef(null);
  const datesRef = useRef(null);
  const boditaRef = useRef(null);
  const howWeMetRef = useRef(null);
  const howWeFellRef = useRef(null);
  const rsvpRef = useRef(null);

  useEffect(() => {
    resize();

    if (id) {
      getUserByUuid(id, setGuest);
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

  const animateSectionJump = (ref) => {
    setTimeout(() => {
      setAnimationState(`${styles.content} ${styles.fadeIn}`);

      ref.current.scrollIntoView({
        block: "start", // You can adjust this value based on your needs ('start', 'center', 'end', or 'nearest')
      });
    }, 500);

    setAnimationState(`${styles.content} ${styles.fadeOut}`);
  };

  const toggleCollapsable = (ref, toggle) => {
    if(toggle) {
      setTimeout(() => {
        ref.current.style.height = "943px";
      }, 200);
    }
    else
      ref.current.style.height = "0px";
  }

  window.onresize = resize;

  return (
    <div className={styles.main}>
      <div className={styles.bottomMenu}>
        <div className={styles.bottomMenuOption}>
          <Link onClick={() => animateSectionJump(morritosRef)}>
            <HomeOutlinedIcon />
            <span>Inicio</span>
          </Link>
        </div>
        <div className={styles.bottomMenuOption}>
          <Link onClick={() => animateSectionJump(usRef)}>
            <FavoriteBorderOutlinedIcon />
            <span>Nosotros</span>
          </Link>
        </div>
        <div className={styles.bottomMenuOption}>
          <Link onClick={() => animateSectionJump(boditaRef)}>
            <SynagogueOutlinedIcon />
            <span>Evento</span>
          </Link>
        </div>
        <div className={styles.bottomMenuOption}>
          <Link onClick={() => animateSectionJump(rsvpRef)}>
            <MarkEmailReadOutlinedIcon />
            <span>RSVP</span>
          </Link>
        </div>
        <div className={styles.bottomMenuOption}>
          <Link onClick={() => animateSectionJump(morritosRef)}>
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
{/* 
        <section className={styles.mainDivider}>
          <h1 className={styles.bumble}>
            Simón, los rumores son ciertos, <br />
            nos conocimos en <b>Bumble.</b>
          </h1>
          <img src="/wedding-front/mainJade.png" alt="" />
        </section> */}

        <div ref={usRef} className={styles.whoAreWe}>
          <h1>Esto es lo que somos...</h1>

          <Box
            className={styles.morritoDialog + " " + styles.tumblus}
            visibility={isAntonioOpen ? "" : "hidden"}
          >
            <h4>Antonio</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              illo totam hic magnam ab laudantium cupiditate dignissimos rerum
              obcaecati! Fuga fugit architecto suscipit eveniet aperiam
              reiciendis, vitae recusandae vel unde!
            </p>
          </Box>

          <Box
            className={styles.morritoDialog + " " + styles.nallely}
            visibility={isNallelyOpen ? "" : "hidden"}
          >
            <h4>Nallely</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              illo totam hic magnam ab laudantium cupiditate dignissimos rerum
              obcaecati! Fuga fugit architecto suscipit eveniet aperiam
              reiciendis, vitae recusandae vel unde!
            </p>
          </Box>

          <div className={styles.hearts}>
            <div
              className={styles.heartButton}
              onClick={() => openMorritoPopover(false)}
            >
              <FavoriteIcon />
            </div>
            <div
              className={styles.heartButton}
              onClick={() => openMorritoPopover(true)}
            >
              <FavoriteIcon />
            </div>
          </div>
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
          <div className={styles.date}>
            <div
              className={styles.leftColumn}
              style={{ backgroundImage: "url(" + MatchImg + ")", zIndex: 2 }}
            >
              <div className={styles.collapsableOverlay} ref={howWeMetRef}>

              <div className={styles.collapsableOverlayButton + " " + styles.close} onClick={ () => toggleCollapsable(howWeMetRef, false)}>
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

              <div className={styles.collapsableOverlayButton} onClick={ () => toggleCollapsable(howWeMetRef, true)}>
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

          <div className={styles.date}>
            <div
              className={styles.leftColumn}
              style={{ backgroundImage: "url(" + MasonryImg + ")", zIndex: 3 }}
            >

<div className={styles.collapsableOverlay} ref={howWeFellRef}>

<div className={styles.collapsableOverlayButton + " " + styles.close} onClick={ () => toggleCollapsable(howWeFellRef, false)}>
                <ClearIcon />
              </div>
                <h1>¿Cómo nos enamoramos?</h1>

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

                  <br /><br />
                  Casi al llegar al límite de las 24 horas, Antonio presiona el
                  botón de emergencia el cual le daba otras 24 horas a Nallely
                  para enviarle un mensaje. Intrigada por tal acción el 20 de
                  Diciembre, Nallely envía a Antonio el clásico “Hola ¿cómo
                  estas?”

                  <br /><br />
                  Casi al llegar al límite de las 24 horas, Antonio presiona el
                  botón de emergencia el cual le daba otras 24 horas a Nallely
                  para enviarle un mensaje. Intrigada por tal acción el 20 de
                  Diciembre, Nallely envía a Antonio el clásico “Hola ¿cómo
                  estas?”

                  <br /><br />
                  Casi al llegar al límite de las 24 horas, Antonio presiona el
                  botón de emergencia el cual le daba otras 24 horas a Nallely
                  para enviarle un mensaje. Intrigada por tal acción el 20 de
                  Diciembre, Nallely envía a Antonio el clásico “Hola ¿cómo
                  estas?”

                  <br /><br />
                  Casi al llegar al límite de las 24 horas, Antonio presiona el
                  botón de emergencia el cual le daba otras 24 horas a Nallely
                  para enviarle un mensaje. Intrigada por tal acción el 20 de
                  Diciembre, Nallely envía a Antonio el clásico “Hola ¿cómo
                  estas?”
                </p>
              </div>

              <div className={styles.collapsableOverlayButton} onClick={ () => toggleCollapsable(howWeFellRef, true)}>
                <FavoriteBorderOutlinedIcon />
                <span>¿Cómo nos enamoramos?</span>
              </div>


            </div>
            <div className={styles.rightColumn}>
              <div className={styles.dateContent}>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Explicabo, officiis, inventore labore culpa odit earum
                  assumenda vitae expedita laborum quis quibusdam impedit amet
                  quidem, obcaecati modi. Debitis qui esse illo?
                  <br />
                  <br />
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Temporibus illum tempore nisi debitis vitae officia
                  repudiandae odio cupiditate et quos voluptatibus, neque libero
                  dolor magni, perspiciatis vero fuga? Necessitatibus, expedita.

                  <br /> <br />
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Temporibus illum tempore nisi debitis vitae officia
                  repudiandae odio cupiditate et quos voluptatibus, neque libero
                  dolor magni, perspiciatis vero fuga? Necessitatibus, expedita.
                </p>
                
              </div>
            </div>
          </div>

          <div className={styles.date + " " + styles.hideOnMobile}>
            <div className={styles.leftColumn}
                          style={{ backgroundImage: "url(" + MasonryImg + ")" }}
            ></div>
            <div className={styles.rightColumn}>
              <div className={styles.dateContent}>
                <h1>
                  Cita
                  <br /># 295
                </h1>

                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Explicabo, officiis, inventore labore culpa odit earum
                  assumenda vitae expedita laborum quis quibusdam impedit amet
                  quidem, obcaecati modi. Debitis qui esse illo?
                  <br />
                  <br />
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Temporibus illum tempore nisi debitis vitae officia
                  repudiandae odio cupiditate et quos voluptatibus, neque libero
                  dolor magni, perspiciatis vero fuga? Necessitatibus, expedita.
                </p>
              </div>
            </div>
          </div>
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
           <h1>  Guest: {guest ? guest.name : ''}</h1>
        </section>


        <section className={styles.footer}>
          <p>Made with ❤️ by Antonio & Nallely</p>
        </section>
      </div>
    </div>
  );
};
export default Wedding;
