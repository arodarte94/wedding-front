import React from "react";
import styles from "../../styles/front.module.scss";
import { Grid } from "@mui/material";

const Schedule = () => {
  const flexProps = {
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    flexDirection: "column",
  };

  const mobileFlexProps = flexProps && {
    
  }
  return (
    <>

      <div>




        <Grid container sx={{  display: { xs: 'flex', md: 'none' } }}>
            <Grid xs={12} {...mobileFlexProps}>
                <Grid container>
                    <Grid xs={5.8} {...flexProps}>
                    <h5>Misa</h5>
                    <img src="church.png" alt="" />
                  </Grid>
                  <Grid
                    xs={0.2}
                    className={styles.pinkDivider}
                    {...flexProps}
                    ></Grid>
                    <Grid xs={5.8} {...flexProps}>
    
                <h6>7:00 p.m.</h6>
                <p>
                  Parroquia Nuestra
                  <br /> Señora de la Paz
                </p>
                <p>
                  C. Rancho el Retiro Sur 3517 <br /> Juárez, Chih.
                </p>
              
                    </Grid>

                </Grid>
            </Grid>








            <Grid xs={12} {...mobileFlexProps}>
                <Grid container>
                    <Grid xs={5.8} {...flexProps}>
                    <h5>Cena</h5>
                    <img src="dinner.png" alt="" />
                  </Grid>
                  <Grid
                    xs={0.2}
                    className={styles.pinkDivider}
                    {...flexProps}
                    ></Grid>
                    <Grid xs={5.8} {...flexProps}>
                <h6>7:00 p.m.</h6>
                <p>
                  Parroquia Nuestra
                  <br /> Señora de la Paz
                </p>
                <p>
                  C. Rancho el Retiro Sur 3517 <br /> Juárez, Chih.
                </p>
                    </Grid>
                </Grid>
            </Grid>









            <Grid xs={12} {...mobileFlexProps}>
                <Grid container>
                    <Grid xs={5.8} {...flexProps}>
                    <h5>Presentación</h5>
                    <img src="dance.png" alt="" />
                  </Grid>
                  <Grid
                    xs={0.2}
                    className={styles.pinkDivider}
                    {...flexProps}
                    ></Grid>
                    <Grid xs={5.8} {...flexProps}>
                <h6>7:00 p.m.</h6>
                <p>
                  Parroquia Nuestra
                  <br /> Señora de la Paz
                </p>
                <p>
                  C. Rancho el Retiro Sur 3517 <br /> Juárez, Chih.
                </p>
                    </Grid>
                </Grid>
            </Grid>










            <Grid xs={12} {...mobileFlexProps}>
                <Grid container>
                    <Grid xs={5.8} {...flexProps}>
                    <h5>Fiesta</h5>
                    <img src="discoBall.png" alt="" />
                  </Grid>
                  <Grid
                    xs={0.2}
                    className={styles.pinkDivider}
                    {...flexProps}
                    ></Grid>
                    <Grid xs={5.8} {...flexProps}>
                <h6>7:00 p.m.</h6>
                <p>
                  Parroquia Nuestra
                  <br /> Señora de la Paz
                </p>
                <p>
                  C. Rancho el Retiro Sur 3517 <br /> Juárez, Chih.
                </p>
                    </Grid>
                </Grid>
            </Grid>










            <Grid xs={12} {...mobileFlexProps}>
                <Grid container>
                    <Grid xs={5.8} {...flexProps}>
                    <img src="justMarried.png" alt="" />
                  </Grid>
                  <Grid
                    xs={0.2}
                    className={styles.pinkDivider}
                    {...flexProps}
                    ></Grid>
                    <Grid xs={5.8} {...flexProps}>
                <h6>2:00 a.m.</h6>
                <p>Fuímonos a koger</p>
                    </Grid>
                </Grid>
            </Grid>
            

            <Grid xs={12} {...flexProps}>
            <h4>Forever</h4>
          </Grid>


        </Grid>















        <Grid container 	sx={{
          display: { xs: 'none', md: 'flex' },
        }}>
         
         
          <Grid lg={10} sm={12}>
            <Grid container>
              <Grid md={2.4} sm={12} {...flexProps}>
                <h5>Misa</h5>
                <img src="church.png" alt="" />
              </Grid>
              <Grid md={2.4} sm={12} {...flexProps}>
                <h5>Cena</h5>
                <img src="dinner.png" alt="" />
              </Grid>
              <Grid md={2.4} sm={12} {...flexProps}>
                <h5>Presentación</h5>
                <img src="dance.png" alt="" />
              </Grid>
              <Grid md={2.4} sm={12} {...flexProps}>
                <h5>Fiesta</h5>
                <img src="discoBall.png" alt="" />
              </Grid>
              <Grid md={2.4} sm={12} {...flexProps}>
                <h5>&nbsp;</h5>
                <img src="justMarried.png" alt="" />
              </Grid>
            </Grid>
            <Grid
              container
              className={styles.pinkDivider}
              {...flexProps}
            ></Grid>
            <Grid container>
              <Grid md={2.4} sm={12} {...flexProps}>
                <h6>7:00 p.m.</h6>
                <p>
                  Parroquia Nuestra
                  <br /> Señora de la Paz
                </p>
                <p>
                  C. Rancho el Retiro Sur 3517 <br /> Juárez, Chih.
                </p>
              </Grid>
              <Grid md={2.4} sm={12} {...flexProps}>
                <h6>7:00 p.m.</h6>
                <p>
                  Parroquia Nuestra
                  <br /> Señora de la Paz
                </p>
                <p>
                  C. Rancho el Retiro Sur 3517 <br /> Juárez, Chih.
                </p>
              </Grid>
              <Grid md={2.4} sm={12} {...flexProps}>
                <h6>7:00 p.m.</h6>
                <p>
                  Parroquia Nuestra
                  <br /> Señora de la Paz
                </p>
                <p>
                  C. Rancho el Retiro Sur 3517 <br /> Juárez, Chih.
                </p>
              </Grid>
              <Grid md={2.4} sm={12} {...flexProps}>
                <h6>7:00 p.m.</h6>
                <p>
                  Parroquia Nuestra
                  <br /> Señora de la Paz
                </p>
                <p>
                  C. Rancho el Retiro Sur 3517 <br /> Juárez, Chih.
                </p>
              </Grid>
              <Grid md={2.4} sm={12} {...flexProps}>
                <h6>2:00 a.m.</h6>
              </Grid>
            </Grid>
          </Grid>



          <Grid lg={2} sm={12} {...flexProps}>
            <h4>Forever</h4>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Schedule;
