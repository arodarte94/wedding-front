import { Menu } from "@mui/icons-material";
import styles from "./styles/front.module.scss";
import { Button } from "@mui/material";
const LandingPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.topMenu}>
        <Menu className={styles.topMenuCollapse} />
        <div className={styles.topMenuTitle}>&emsp;A&N</div>
        <div className={styles.topMenuRsvp}>
        <Button variant="outlined" color="success">
  RSVP
</Button>
        </div>
      </div>

      <div className={styles.sideMenu}>
        <div className={styles.menuTitle}>A&N</div>
        <ul>
          <li>Los morritos</li>
          <li>Los dates</li>
          <li>La bodita</li>
          <li>El RSVP</li>
          <li>Los regalitos</li>
        </ul>

        <div className={styles.menuFooter}>03.11.2024</div>
      </div>

      <div className={styles.content}>
        {/* Section 1: Main morritos cover page */}
        <div className={styles.morritosMainCover}>
          <div className={styles.mainCoverOverlay}>
            <div className={styles.mainCoverText}>
              <h1>
                {" "}
                Nallely <br /> & <br />
                Tumblus
              </h1>
            </div>
          </div>

          <div className={styles.date}>
            <h2>03.11.2024</h2>
          </div>
        </div>

        {/* Section 2: Quienes son los morritos */}
        <section className={styles.us}>
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
              <img src="/presentation.png" alt="" />
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

        <section className={styles.dates}>

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
          <br/><br/>Y ahora vamos por toda una vida.
        </section>

        <section className={styles.schedule}>
          <h1>La bodita</h1>

        </section>
      </div>
    </div>
  );
};
export default LandingPage;
