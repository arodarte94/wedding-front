import styles from "../../styles/front.module.scss";
import confirmationStyles from "../../styles/confirmation.module.scss";
import {
  Box,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import MobileMenu from "./MobileMenu";
import SideMenu from "./SideMenu";
import _ from "lodash";

const Guests = ({ guest, setGuest }) => {
  const changeMainSelection = (e, value, property) => {
    console.log(value);
    const guestCopy = _.cloneDeep(guest);
    guest[property] = value;
    setGuest(guestCopy);
  };

  const changeGuestSelection = (e, value, property, id = null) => {
    const guestCopy = _.cloneDeep(guest);
    const modifiedGuest = guestCopy?.guests.find((i) => i.id === id);
    modifiedGuest[property] = value;
    setGuest(guestCopy);
  };

  return (
    <Box className={styles.main}>
      <MobileMenu />
      <SideMenu />
      <Box className={styles.content}>
        <Box className={confirmationStyles.guestsList}>
          <Grid container>
            <Grid item xl={4} lg={6} xs={12} padding={1}>
              <Box className={confirmationStyles.guestCard}>
                <Typography className={confirmationStyles.guestName}>
                  {guest.name}
                </Typography>

                <Box className={confirmationStyles.selectionRow}>
                  <Typography className={confirmationStyles.selectionTitle}>
                    ¿Esta persona asistirá?
                  </Typography>
                  <ToggleButtonGroup
                    color="primary"
                    value={guest.confirmed}
                    exclusive
                    onChange={(e, value) => {
                      changeMainSelection(e, value, "confirmed");
                    }}
                    aria-label="Platform"
                    fullWidth
                  >
                    <ToggleButton value={1}>Sí</ToggleButton>
                    <ToggleButton value={0}>No</ToggleButton>
                  </ToggleButtonGroup>
                </Box>

                <Box className={confirmationStyles.selectionRow}>
                  <Typography className={confirmationStyles.selectionTitle}>
                    Entrada
                  </Typography>
                  <ToggleButtonGroup
                    color="primary"
                    value={guest.entree_id}
                    exclusive
                    onChange={(e, value) => {
                      changeMainSelection(e, value, "entree_id");
                    }}
                    aria-label="Entree"
                    fullWidth
                  >
                    <ToggleButton value={1}>Ensalada Olimpia</ToggleButton>
                    <ToggleButton value={2}>
                      Tacos de jícama con camarón
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Box>

                <Box className={confirmationStyles.selectionRow}>
                  <Typography className={confirmationStyles.selectionTitle}>
                    Plato fuerte
                  </Typography>
                  <ToggleButtonGroup
                    color="primary"
                    value={guest.dinner_id}
                    exclusive
                    onChange={(e, value) => {
                      changeMainSelection(e, value, "dinner_id");
                    }}
                    aria-label="Dinner"
                    fullWidth
                  >
                    <ToggleButton value={1}>Chile en Nogada</ToggleButton>
                    <ToggleButton value={2}>
                      Pollo con salsa en nuez
                    </ToggleButton>
                    <ToggleButton value={3}>Pizza (sólo niños)</ToggleButton>
                  </ToggleButtonGroup>
                </Box>

                <Box className={confirmationStyles.floatingNumber}>1</Box>
              </Box>
            </Grid>

            {guest?.guests.map((person, index) => {
              return (
                <Grid item xl={4} lg={6} xs={12} padding={1}>
                  <Box className={confirmationStyles.guestCard}>
                    <Typography className={confirmationStyles.guestName}>
                      {person.name}
                    </Typography>

                    <Box className={confirmationStyles.selectionRow}>
                      <Typography className={confirmationStyles.selectionTitle}>
                        ¿Esta persona asistirá?
                      </Typography>
                      <ToggleButtonGroup
                        color="primary"
                        value={person.confirmed}
                        exclusive
                        onChange={(e, value) => {
                          changeGuestSelection(
                            e,
                            value,
                            "confirmed",
                            person.id,
                          );
                        }}
                        aria-label="Confirmation"
                        fullWidth
                      >
                        <ToggleButton value={1}>Sí</ToggleButton>
                        <ToggleButton value={0}>No</ToggleButton>
                      </ToggleButtonGroup>
                    </Box>

                    <Box className={confirmationStyles.selectionRow}>
                      <Typography className={confirmationStyles.selectionTitle}>
                        Entrada
                      </Typography>
                      <ToggleButtonGroup
                        color="primary"
                        value={person.entree_id}
                        exclusive
                        onChange={(e, value) => {
                          changeGuestSelection(
                            e,
                            value,
                            "entree_id",
                            person.id,
                          );
                        }}
                        aria-label="Entree"
                        fullWidth
                      >
                        <ToggleButton value={1}>Ensalada Olimpia</ToggleButton>
                        <ToggleButton value={2}>
                          Tacos de jícama con camarón
                        </ToggleButton>
                      </ToggleButtonGroup>
                    </Box>

                    <Box className={confirmationStyles.selectionRow}>
                      <Typography className={confirmationStyles.selectionTitle}>
                        Plato fuerte
                      </Typography>
                      <ToggleButtonGroup
                        color="primary"
                        value={person.dinner_id}
                        exclusive
                        onChange={(e, value) => {
                          changeGuestSelection(
                            e,
                            value,
                            "dinner_id",
                            person.id,
                          );
                        }}
                        aria-label="Dinner"
                        fullWidth
                      >
                        <ToggleButton value={1}>Chile en Nogada</ToggleButton>
                        <ToggleButton value={2}>
                          Pollo con salsa en nuez
                        </ToggleButton>
                        <ToggleButton value={3}>
                          Pizza (sólo niños)
                        </ToggleButton>
                      </ToggleButtonGroup>
                    </Box>

                    <Box className={confirmationStyles.floatingNumber}>
                      {index + 2}
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Guests;
