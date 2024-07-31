import { Box, Button, Grid, Typography } from "@mui/material";
import rsvpStyles from "../../styles/rsvp.module.scss";
import styles from "../../styles/front.module.scss";

const Rsvp = () => {
  return (
    <Grid container className={rsvpStyles.rsvp}>
      <Grid
        item
        lg={6}
        xs={12}
        padding={5}
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        position={"relative"}
      >
        <Box>
          <Typography
            sx={{ fontFamily: "chapaza", color: "#a8827a", fontSize: 30 }}
          >
            Fecha límite para confirmar:
          </Typography>
          <Typography
            sx={{ fontFamily: "chapaza", color: "#414e56", fontSize: 20 }}
          >
            4 de octubre 2024
          </Typography>
          <Typography
            sx={{ fontFamily: "chapaza", color: "#414e56", fontSize: 20 }}
          >
            *Necesitamos tu confirmación antes de esta fecha para poder servirte
            cena.
          </Typography>
        </Box>
        <Box marginTop={3}>
          <Typography
            sx={{ fontFamily: "chapaza", color: "#a8827a", fontSize: 30 }}
          >
            ¿Cómo confirmo mi asistencia?
          </Typography>
          <Typography
            sx={{ fontFamily: "chapaza", color: "#414e56", fontSize: 20 }}
          >
            <ol>
              <li>Dar click en el botón de “confirmar”</li>
              <li>
                Se te redireccionará a un sitio donde tendrás que escribir el
                código de 6 dígitos que te asignamos
              </li>
              <li>
                Ahora tendrás que confirmar el número de personas que asistirán
                al evento, conforme al número de pases que te fueron asignados
              </li>
              <li>
                Por último podrás elegir una entrada y plato fuerte para cada
                uno de los invitados confirmados
              </li>
            </ol>
          </Typography>
          <Button
            className={rsvpStyles.confirm}
            variant="outlined"
            sx={{ marginLeft: 2 }}
          >
            CONFIRMAR
          </Button>
        </Box>
        <Box
          component={"img"}
          src={"transparentJade.png"}
          className={rsvpStyles.transparentJade}
        />
      </Grid>
      <Grid item lg={6} xs={0} className={rsvpStyles.rsvpImage}></Grid>
    </Grid>
  );
};

export default Rsvp;
