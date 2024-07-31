import { Box, Grid, Typography } from "@mui/material";
import styles from "../../styles/front.module.scss";

const Gifts = () => {
  return (
    <>
      <Box className={styles.banner}>
        <Box className={styles.bannerText}>
          <Typography sx={{ fontFamily: "chapaza", fontSize: 25 }}>
            Buzón de dólares
          </Typography>
          <Typography
            sx={{
              fontFamily: "chapaza",
              fontSize: 15,
              marginTop: 1.5,
              marginBottom: 3,
            }}
          >
            Para nosotros tu asistencia es lo más importante, no contamos con
            mesa de regalos. Si desean hacernos un detalle, preferimos
            destinarlo a la actividad que más amamos hacer: viajar.
          </Typography>

          <Grid container spacing={2} sx={{ fontFamily: "chapaza" }}>
            <Grid item lg={6} xs={12}>
              <b>Antonio Rodarte</b>
              <br />
              <br />
              CLABE Interbancaria BBVA:
              <br /> 0121 6401 5417 8229 78
              <br />
            </Grid>

            <Grid item lg={6} xs={12}>
              <b>Nallely Medina</b>
              <br />
              <br />
              CashApp: $nimedina2
              <br />
              Zelle: medinayu@outlook.com
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Gifts;
