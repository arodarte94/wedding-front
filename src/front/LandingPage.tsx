import styles from "./styles/front.module.scss";
import { Link } from "react-scroll";
import { useEffect, useRef, useState } from "react";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import SynagogueOutlinedIcon from "@mui/icons-material/SynagogueOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Button } from "@mui/material";

const LandingPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [animationState, setAnimationState] = useState(`${styles.content}`);
  
  const morritosRef = useRef(null);
  const datesRef = useRef(null);
  const boditaRef = useRef(null);
  
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

  const animateSectionJump = (ref) => {
    
    setTimeout(() => {
      setAnimationState(`${styles.content} ${styles.fadeIn}`);

      ref.current.scrollIntoView({
        block: 'start', // You can adjust this value based on your needs ('start', 'center', 'end', or 'nearest')
      });

    }, 500);

    setAnimationState(`${styles.content} ${styles.fadeOut}`);
  }

  window.onresize = resize;

  return (
    <div className={styles.main}>
      <div className={styles.bottomMenu}>
        <div className={styles.bottomMenuOption}>
        <Link onClick={()=> animateSectionJump(morritosRef) }>
          <HomeOutlinedIcon />
          <span>Inicio</span>
          </Link>
        </div>
        <div className={styles.bottomMenuOption}>
        <Link onClick={()=> animateSectionJump(datesRef) }>
          <FavoriteBorderOutlinedIcon />
          <span>Nosotros</span>
          </Link>
        </div>
        <div className={styles.bottomMenuOption}>
        <Link onClick={()=> animateSectionJump(boditaRef) }>
          <SynagogueOutlinedIcon />
          <span>Evento</span>
        </Link>
        </div>
        <div className={styles.bottomMenuOption}>
        <Link onClick={()=> animateSectionJump(morritosRef) }>
          <MarkEmailReadOutlinedIcon />
          <span>RSVP</span>
          </Link>
        </div>
        <div className={styles.bottomMenuOption}>
        <Link onClick={()=> animateSectionJump(morritosRef) }>
          <CardGiftcardOutlinedIcon />
          <span>Regalos</span>
          </Link>
        </div>
      </div>

      <div className={styles.sideMenu}>
        <div className={styles.menuTitle}>

        <Button className={styles.mainConfirm} variant="outlined">CONFIRMAR</Button>
        </div>
        <ul>
          <li>
          <Link onClick={()=> animateSectionJump(morritosRef) }>
              Inicio
            </Link>
          </li>
          <li>
          <Link onClick={()=> animateSectionJump(datesRef) }>
              Nuestra historia
            </Link>
          </li>
          <li>
          <Link onClick={()=> animateSectionJump(boditaRef) }>
              Evento
            </Link>
          </li>
          <li>
          <Link onClick={()=> animateSectionJump(morritosRef) }>
              RSVP
            </Link>
          </li>
          <li>
          <Link onClick={()=> animateSectionJump(morritosRef) }>
              Regalos
            </Link>
          </li>
        </ul>

        {/* <div className={styles.menuFooter}>03.11.2024</div> */}
      </div>

      <div ref={morritosRef} className={animationState}>
        {/* Section 1: Main morritos cover page */}
        <div className={styles.morritosMainCover}>
          <div className={styles.mainCoverOverlay}>
            <div className={styles.mainCoverText}>
              {isMobile ? 
              <img src="/wedding-front/mainLabelMobile.png" alt="" className={styles.mobileLabel} />
              :<img src="/wedding-front/mainLabel.png" alt="" />
              }
            </div>
          </div>

          {!isMobile && <div className={styles.date}>
          <img src="/wedding-front/Fecha.png" alt="" />
          </div>}
        </div>

        <section className={styles.totalDates}>
          Divider <b>raro</b>
          <br />Todavía no sé que poner aquí
        </section>

        <div className={styles.morritosMainCover} style={{background: 'url("Homepage.jpg")'}}>
          <div className={styles.mainCoverOverlay}>
            <div className={styles.mainCoverText}>
              {isMobile ? 
              <p>Nallely &<br />Antonio</p>
              :<img src="/wedding-front/mainLabel.png" alt="" />
              }
            </div>
          </div>

        </div>
        
        {/* Section 2: Quienes son los morritos */}
        <section  className={styles.us}>
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
        </section>

        {/* Section 3: Dates */}
        <section ref={datesRef} className={styles.dates}>
          <h1>Nuestra historia</h1>
          <div className={styles.date}>
            <div className={styles.leftColumn}></div>
            <div className={styles.rightColumn}>
              <div className={styles.dateContent}>
                <h1>
                  Cita
                  <br /># 01
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

          <div className={styles.date}>
            <div className={styles.leftColumn}></div>
            <div className={styles.rightColumn}>
              <div className={styles.dateContent}>
                <h1>
                  Cita
                  <br /># 08
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

          <div className={styles.date}>
            <div className={styles.leftColumn}></div>
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

        <section className={styles.footer}>
          <div className={styles.container}>
            <hr />
          </div>
          <h1>La nallely & el tumblus</h1>
          <div className={styles.footerInfo}>
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default LandingPage;
