import { Menu } from "@mui/icons-material";
import styles from "./styles/front.module.scss";
import { Button } from "@mui/material";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const LandingPage = () => {

  const [isMenuEnabled, setIsMenuEnabled] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    toggleMenu();
  }, [window.screen.width]);

  const toggleMenu = () => {
        if(window.innerWidth <= 900) {
          setIsMenuEnabled(false);
          setIsMobile(true);
        }
        
        else {
          setIsMenuEnabled(true);
          setIsMobile(false);
        }
  }
  
  window.onresize = toggleMenu;

  return (
    <div className={styles.main}>
      <div className={styles.topMenu}>
        <Menu className={styles.topMenuCollapse} onClick={() => setIsMenuEnabled(!isMenuEnabled)} />
        <div className={styles.topMenuTitle}>&emsp;A&N</div>
        <div className={styles.topMenuRsvp}>
          <Button variant="outlined" color="success">
            RSVP
          </Button>
        </div>
      </div>

      <div className={styles.sideMenu} style={{left: isMenuEnabled? "0px" : "-250px"}} >
        {isMobile ?
            <ChevronLeftIcon className={styles.mobileSideMenuChevron} onClick={() => setIsMenuEnabled(!isMenuEnabled)} />
          : <div className={styles.menuTitle}>A&N</div>
      }
        

        <ul>
          <li>
            <Link to="morritos" smooth={true} duration={500}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="dates" smooth={true} duration={500}>
              Nuestra historia
            </Link>
          </li>
          <li>
            <Link to="bodita" smooth={true} duration={500}>
              Evento
            </Link>
          </li>
          <li>
            <Link to="rsvp" smooth={true} duration={500}>
              RSVP
            </Link>
          </li>
          <li>
            <Link to="regalitos" smooth={true} duration={500}>
              Regalos
            </Link>
          </li>
        </ul>

        {/* <div className={styles.menuFooter}>03.11.2024</div> */}
      </div>

      <div className={styles.content}>
        {/* Section 1: Main morritos cover page */}
        <div className={styles.morritosMainCover}>
          <div className={styles.mainCoverOverlay}>
            <div className={styles.mainCoverText}>
              <p>
                Nallely & Antonio
              </p>
            </div>
          </div>

          <div className={styles.date}>
            <h2>03.11.2024</h2>
          </div>
        </div>

        {/* Section 2: Quienes son los morritos */}
        <section id="morritos" className={styles.us}>
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
        <section id="dates" className={styles.dates}>
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
        <section id="bodita" className={styles.bodita}>
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
