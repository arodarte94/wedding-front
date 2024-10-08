import { Link } from "react-router-dom";
import styles from "../../styles/front.module.scss";
import { Box, Button, Grid } from "@mui/material";

const Schedule = () => {
  const flexProps = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  const mobileFlexProps = flexProps && {};
  return (
    <>
      <Box paddingTop={8}>
        {/* <h1 className={styles.title}>Itinerario</h1> */}
        <Grid container sx={{ display: { xs: "flex", md: "none" } }}>
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
                <a
                  href="https://maps.google.com/?q=Parroquia+Nuestra+Señora+De+La+Paz+Ciudad+Juárez"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration:'underline'}}
                >
                   C. Rancho el Retiro Sur 3517 <br /> Juárez, Chih.
                </a> 
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
                <h6>9:15 p.m.</h6>
                <p>Terraza Jardín Cibeles</p>
                <p>
                <a
                  href="https://maps.google.com/?q=Terraza+Jardín+Cibeles+Ciudad+Juárez"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration:'underline'}}
                >
                  Blvd. Tomás Fernández 8450 <br /> Juárez, Chih. <br />
                </a> 
                  <b>* Con previa confirmación</b>
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
                <h6>10:15 p.m.</h6>
                <p>Terraza Jardín Cibeles</p>
                <p>
                <a
                  href="https://maps.google.com/?q=Terraza+Jardín+Cibeles+Ciudad+Juárez"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration:'underline'}}
                >
                  Blvd. Tomás Fernández 8450 <br /> Juárez, Chih. <br />
                </a> 
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
                <h6>10:30 p.m.</h6>
                <p>Terraza Jardín Cibeles</p>
                <p>
                <a
                  href="https://maps.google.com/?q=Terraza+Jardín+Cibeles+Ciudad+Juárez"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration:'underline'}}
                >
                  Blvd. Tomás Fernández 8450 <br /> Juárez, Chih. <br />
                </a> 
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
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
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
                <a
                  href="https://maps.google.com/?q=Parroquia+Nuestra+Señora+De+La+Paz+Ciudad+Juárez"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration:'underline'}}
                >
                   C. Rancho el Retiro Sur 3517 <br /> Juárez, Chih.
                </a>
                </p>
              </Grid>
              <Grid md={2.4} sm={12} {...flexProps}>
                <h6>9:15 p.m.</h6>
                <p>Terraza Jardín Cibeles</p>
                <p>
                <a
                  href="https://maps.google.com/?q=Terraza+Jardín+Cibeles+Ciudad+Juárez"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration:'underline'}}
                >
                  Blvd. Tomás Fernández 8450 <br /> Juárez, Chih. <br />
                </a>   
                  <b>* Con previa confirmación</b>
                </p>
              </Grid>
              <Grid md={2.4} sm={12} {...flexProps}>
                <h6>10:15 p.m.</h6>
                <p>Terraza Jardín Cibeles</p>
                <p>
                <a
                  href="https://maps.google.com/?q=Terraza+Jardín+Cibeles+Ciudad+Juárez"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration:'underline'}}
                >
                  Blvd. Tomás Fernández 8450 <br /> Juárez, Chih. <br />
                </a> 
                </p>
              </Grid>
              <Grid md={2.4} sm={12} {...flexProps}>
                <h6>10:30 p.m.</h6>
                <p>Terraza Jardín Cibeles</p>
                <p>
                <a
                  href="https://maps.google.com/?q=Terraza+Jardín+Cibeles+Ciudad+Juárez"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration:'underline'}}
                >
                  Blvd. Tomás Fernández 8450 <br /> Juárez, Chih. <br />
                </a> 
                </p>
              </Grid>
              <Grid md={2.4} sm={12} {...flexProps}>
                <h6>2:00 a.m.</h6>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container padding={5} marginTop={5}>
          <Grid lg={6} xs={12} className={styles.scheduleInstructions}>
            <Grid container>
              <Grid item lg={6} xs={12} paddingRight={5}>
                <h3>CONFIRMACIÓN</h3>
                <p>
                  Es muy importante confirmar tu asistencia y selección de
                  platillo a más tardar el día:
                  <h3>4 Octubre 2024</h3>
                  *Sin confirmación y selección de platillo no es posible
                  servirte cena <br />
                  ¡Agradecemos tu pronta confirmación!
                </p>
              </Grid>
              <Grid item lg={6} xs={12}>
                <h3>DRESS CODE</h3>
                <p>
                  Formal
                  <br />
                  Hombres: Traje y corbata
                  <br />
                  Mujeres: Vestido largo
                  <br />
                  *Se reservará el derecho de admisión
                </p>
                <Link to="/confirmation">
                  <Button className={styles.confirm} variant="outlined">
                    CONFIRMAR
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            lg={6}
            display={"flex"}
            alignItems={"end"}
            justifyContent={"end"}
            flexDirection={"column"}
          >
            <Box
              className={styles.floatingTitle}
              sx={{ position: "relative !important;" }}
            >
              <Box sx={{ fontSize: "180px" }}>Detalles</Box>del evento
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Schedule;
