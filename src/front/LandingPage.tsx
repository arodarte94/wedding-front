import styles from "./styles/front.module.scss";
const LandingPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.topMenu}>
        <div className={styles.menuTitle}>MORRITOS WEDDING</div>
      </div>




      <div className={styles.sideMenu}>
      <div className={styles.menuTitle}>A&N</div>
        <ul>
          <li>Los morritos</li>
          <li>Los dates</li>
          <li>Fun facs</li>
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
            <div><h3>Antonio</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi aut porro nam explicabo incidunt accusantium perspiciatis vero, deserunt minus quo praesentium corrupti, ratione quod reprehenderit similique beatae? Alias, temporibus dolore?</p>
            </div>
            <div>

            </div>
            <div><h3>Nallely</h3>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi aut porro nam explicabo incidunt accusantium perspiciatis vero, deserunt minus quo praesentium corrupti, ratione quod reprehenderit similique beatae? Alias, temporibus dolore?</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default LandingPage;
