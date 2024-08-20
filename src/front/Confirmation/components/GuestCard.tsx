import EscalatorWarningIcon from "@mui/icons-material/EscalatorWarning";
import confirmationStyles from "../../styles/confirmation.module.scss";
import {
  Box,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

const GuestCard = ({
  guest,
  handle,
  index,
  children,
  disabled,
}: {
  guest: any;
  handle: any;
  index: any;
  children?: any;
  disabled?: boolean;
}) => {
  return (
    <Grid item xl={4} lg={6} xs={12} padding={1} marginBottom={2}>
      <Box className={confirmationStyles.guestCard}>
        <Typography
          className={confirmationStyles.guestName}
          display={"flex"}
          alignItems={"center"}
        >
          {guest.name}{" "}
          {guest?.type_id == 4 && (
            <EscalatorWarningIcon sx={{ marginLeft: 1 }} />
          )}
        </Typography>
        {children}
        <Box className={confirmationStyles.selectionRow}>
          <Typography className={confirmationStyles.selectionTitle}>
            ¿Esta persona asistirá?
          </Typography>
          <ToggleButtonGroup
            color="primary"
            value={guest.confirmed}
            exclusive
            onChange={(e, value) => {
              handle(e, value, "confirmed", guest.id);
            }}
            aria-label="Confirmation"
            fullWidth
          >
            <ToggleButton
              value={true}
              className={guest.confirmed ? confirmationStyles.selected : ""}
            >
              Sí
            </ToggleButton>
            <ToggleButton
              value={false}
              className={!guest.confirmed ? confirmationStyles.selected : ""}
            >
              No
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {guest.confirmed === true && (
          <Box className={confirmationStyles.selectionRow}>
            <Typography className={confirmationStyles.selectionTitle}>
              ¿Esta persona cenará?
            </Typography>
            <ToggleButtonGroup
              color="primary"
              value={guest.with_food}
              exclusive
              onChange={(e, value) => {
                handle(e, value, "with_food", guest.id);
              }}
              aria-label="with_food"
              fullWidth
              disabled={disabled}
            >
              <ToggleButton
                value={true}
                className={guest.with_food ? confirmationStyles.selected : ""}
              >
                Sí
              </ToggleButton>
              <ToggleButton
                value={false}
                className={
                  guest.with_food === false ? confirmationStyles.selected : ""
                }
              >
                No
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        )}

        {guest.confirmed === true && guest.with_food !== false && (
          <>
            {guest?.type_id == 4 ? (
              <Box className={confirmationStyles.selectionRow}>
                <Typography
                  className={confirmationStyles.selectionTitle}
                  sx={{ fontSize: "20px !important" }}
                  textAlign={"center"}
                >
                  A los niños se les servirá pizza y refresco.
                </Typography>
              </Box>
            ) : (
              <>
                <Box className={confirmationStyles.selectionRow}>
                  <Typography className={confirmationStyles.selectionTitle}>
                    Entrada
                  </Typography>
                  <ToggleButtonGroup
                    color="primary"
                    value={guest.entree_id}
                    exclusive
                    onChange={(e, value) => {
                      handle(e, value, "entree_id", guest.id);
                    }}
                    aria-label="Entree"
                    fullWidth
                    disabled={disabled}
                  >
                    <ToggleButton
                      value={1}
                      className={
                        guest.entree_id === 1 ? confirmationStyles.selected : ""
                      }
                      sx={{ flexDirection: "column" }}
                    >
                      Ensalada Olimpia
                      <Typography fontSize={10}>
                        Mezcla de lechugas, queso de cabra, pera y arándanos al
                        balsámico
                      </Typography>
                    </ToggleButton>
                    <ToggleButton
                      value={2}
                      className={
                        guest.entree_id === 2 ? confirmationStyles.selected : ""
                      }
                      sx={{ flexDirection: "column" }}
                    >
                      Tacos de jícama con camarón
                      <Typography fontSize={10}>
                        Finas láminas de jícama rellenas de camarón salteado con
                        reducción de tamarindo
                      </Typography>
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
                      handle(e, value, "dinner_id", guest.id);
                    }}
                    aria-label="Dinner"
                    fullWidth
                    disabled={disabled}
                  >
                    <ToggleButton
                      value={1}
                      className={
                        guest.dinner_id === 1 ? confirmationStyles.selected : ""
                      }
                      sx={{ flexDirection: "column" }}
                    >
                      Chile en Nogada
                      <Typography fontSize={10}>
                        Chile poblano relleno de carne de res y puerco,
                        mezclados con frutas de la estación, nueces, almendras,
                        piñones y diversas especias
                      </Typography>
                    </ToggleButton>
                    <ToggleButton
                      value={2}
                      className={
                        guest.dinner_id === 2 ? confirmationStyles.selected : ""
                      }
                      sx={{ flexDirection: "column" }}
                    >
                      Suprema de Pollo Rellena
                      <Typography fontSize={10}>
                        Pechuga de pollo rellena de espinacas y queso de cabra
                        acompañado de arroz florentina y vegetales crocantes
                      </Typography>
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Box>
              </>
            )}
          </>
        )}
        <Box className={confirmationStyles.floatingNumber}>{index}</Box>
      </Box>
    </Grid>
  );
};

export default GuestCard;
