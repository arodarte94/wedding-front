import styles from "../../styles/front.module.scss";
import confirmationStyles from "../../styles/confirmation.module.scss";
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import SideMenu from "./SideMenu";
import _ from "lodash";
import { saveGuests } from "../../../admin/users/actions";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useState } from "react";
import LoadingBackdrop from "../../../admin/components/layout/loadingBackdrop";

const swal = withReactContent(Swal)

const Guests = ({ guest, setGuest }) => {
  const availableSlots = guest?.slots - guest?.guests.length;

  const [loading, setLoading] = useState(false);

  const newGuests = Array(availableSlots).fill({
    id: null,
    name: "",
    confirmed: 0,
    entree_id: null,
    dinner_id: null,
    new: true,
  });

  const changeMainSelection = (e, value, property) => {
    if (value !== null) {
      setGuest({ ...guest, [property]: value });
    }
  };

  const changeGuestSelection = (e, value, property, id = null) => {
    if (value !== null) {
      const guestCopy = _.cloneDeep(guest);
      const modifiedGuest = guestCopy?.guests.find((i) => i.id === id);
      modifiedGuest[property] = value;
      setGuest(guestCopy);
    }
  };

  const addGuest = (e, value) => {
    if (!value || value.trim() === "" || value.trim().length < 3) {
      return;
    }

    const newGuestData = {
      id: Math.random().toString(36).substr(2, 9),
      name: value,
      new: true,
      confirmed: 0,
      entree_id: null,
      dinner_id: null,
    };
    const guestCopy = _.cloneDeep(guest);
    guestCopy.guests.push(newGuestData);
    setGuest(guestCopy);
  };

  const save = async () => {
    setLoading(true);
    const res = await saveGuests(guest);
    setLoading(false);
    if (res?.status === 200) {

      setGuest(res.data.user);

      swal.fire({
        title: "¡Gracias!",
        text: "Tu confirmación y platillos han sido guardados",
        icon: "success",
        confirmButtonText: "Cerrar"
      });

    }

    else {
      swal.fire({
        title: "¡Oops!",
        text: res?.response?.data?.message || "An error occurred",
        icon: "error",
        confirmButtonText: "Cerrar"
      });
    }

  };

  return (
    <Box className={styles.main}>
      {loading && <LoadingBackdrop />}
      <Box className={confirmationStyles.footerButtons}>
        <ButtonGroup fullWidth>
          <Button variant="contained" color="success" onClick={save}>
            Guardar
          </Button>
          <Button variant="contained" color="warning">
            Regresar
          </Button>
        </ButtonGroup>
      </Box>

      <SideMenu />

      <Box className={styles.content}>
        <Box className={confirmationStyles.guestsList}>
          <Grid container>
            <GuestOptions
              key={"mainGuest"}
              guest={guest}
              handle={changeMainSelection}
              index={1}
            />
            {guest?.guests.map((person, index) => {
              return (
                <GuestOptions
                  key={"childGuest" + index}
                  guest={person}
                  handle={changeGuestSelection}
                  index={index + 2}
                />
              );
            })}

            {newGuests.map((person, index) => {
              return (
                <NewGuest
                  key={"newGuest" + index}
                  guest={person}
                  handle={changeGuestSelection}
                  index={guest?.guests.length + index + 2}
                  add={addGuest}
                />
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

const GuestOptions = ({ guest, handle, index }) => {
  return (
    <Grid item xl={4} lg={6} xs={12} padding={1} marginBottom={2}>
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
              handle(e, value, "confirmed", guest.id);
            }}
            aria-label="Confirmation"
            fullWidth
          >
            <ToggleButton
              value={1}
              className={guest.confirmed ? confirmationStyles.selected : ""}
            >
              Sí
            </ToggleButton>
            <ToggleButton
              value={0}
              className={!guest.confirmed ? confirmationStyles.selected : ""}
            >
              No
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {guest.confirmed === 1 && (
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
              >
                <ToggleButton
                  value={1}
                  className={
                    guest.entree_id === 1 ? confirmationStyles.selected : ""
                  }
                >
                  Ensalada Olimpia
                </ToggleButton>
                <ToggleButton
                  value={2}
                  className={
                    guest.entree_id === 2 ? confirmationStyles.selected : ""
                  }
                >
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
                  handle(e, value, "dinner_id", guest.id);
                }}
                aria-label="Dinner"
                fullWidth
              >
                <ToggleButton
                  value={1}
                  className={
                    guest.dinner_id === 1 ? confirmationStyles.selected : ""
                  }
                >
                  Chile en Nogada
                </ToggleButton>
                <ToggleButton
                  value={2}
                  className={
                    guest.dinner_id === 2 ? confirmationStyles.selected : ""
                  }
                >
                  Pollo con salsa en nuez
                </ToggleButton>
                <ToggleButton
                  value={3}
                  className={
                    guest.dinner_id === 3 ? confirmationStyles.selected : ""
                  }
                >
                  Pizza (sólo niños)
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>
          </>
        )}

        <Box className={confirmationStyles.floatingNumber}>{index}</Box>
      </Box>
    </Grid>
  );
};

const NewGuest = ({ guest, handle, index, add }) => {
  return (
    <Grid item xl={4} lg={6} xs={12} padding={1}>
      <Box className={confirmationStyles.guestCard}>
        <Typography className={confirmationStyles.guestName}>
          Nuevo invitado
        </Typography>
        <Box className={confirmationStyles.selectionRow}>
          <Typography className={confirmationStyles.selectionTitle}>
            Escribe el nombre del invitado y pulsa Enter
          </Typography>
          <TextField
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                add(e, e.target.value);
              }
            }}
            label="Nombre..."
            fullWidth
          />
        </Box>
        <Box className={confirmationStyles.floatingNumber}>{index}</Box>
      </Box>
    </Grid>
  );
};

export default Guests;
