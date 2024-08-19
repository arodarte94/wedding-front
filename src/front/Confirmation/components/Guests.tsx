import styles from "../../styles/front.module.scss";
import confirmationStyles from "../../styles/confirmation.module.scss";
import {
  Alert,
  Box,
  Button,
  ButtonGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import SideMenu from "./SideMenu";
import _ from "lodash";
import { saveGuests } from "../../../admin/users/actions";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useRef, useState } from "react";
import LoadingBackdrop from "../../../admin/components/layout/loadingBackdrop";
import GuestCard from "./GuestCard";
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const swal = withReactContent(Swal);

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
        confirmButtonText: "Cerrar",
      });
    } else {
      console.log(res);
      swal.fire({
        title: "¡Oops!",
        text: res?.response?.data?.message || "An error occurred",
        icon: "error",
        confirmButtonText: "Cerrar",
      });
    }
  };

  const countDownDate = new Date("Oct 5, 2024 00:00:00").getTime();
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const disabled = distance <= 0;

  return (
    <Box className={styles.main}>
      {loading && (
        <Box
          sx={{
            position: "fixed",
            height: "100vh",
            width: "100%",
            zIndex: 10000,
          }}
        >
          <LoadingBackdrop />
        </Box>
      )}
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
        {disabled && (
          <Box padding={2}>
            <Alert severity="warning" sx={{ fontFamily: "chapaza" }}>
              ¡La fecha límite para confirmar tus platillos fue el 4 de Octubre!
              Aún puedes confirmar tu asistencia, pero ya no es posible cambiar
              tus alimentos.
            </Alert>
          </Box>
        )}
        <Box className={confirmationStyles.guestsList}>
          <Grid container>
            <GuestCard
              key={"mainGuest"}
              guest={guest}
              handle={changeMainSelection}
              index={1}
              disabled={disabled}
            >
              <Box className={confirmationStyles.selectionRow}>
                <TextField
                  fullWidth
                  label="Correo electrónico..."
                  value={guest?.email}
                  onChange={(e) =>
                    setGuest({ ...guest, email: e.target.value })
                  }
                />
              </Box>
            </GuestCard>
            {guest?.guests.map((person, index) => {
              return (
                <GuestCard
                  key={"childGuest" + index}
                  guest={person}
                  handle={changeGuestSelection}
                  index={index + 2}
                  disabled={disabled}
                />
              );
            })}

            {newGuests.map((person, index) => {
              return (
                <NewGuest
                  key={"newGuest" + (guest?.guests.length + index)}
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

const NewGuest = ({ guest, handle, index, add }) => {

  const textBoxRef = useRef(null);
  return (
    <Grid item xl={4} lg={6} xs={12} padding={1} marginBottom={3}>
      <Box className={confirmationStyles.guestCard}>
        <Typography className={confirmationStyles.guestName}>
          Invitado extra
        </Typography>
        <Box className={confirmationStyles.selectionRow}>
          <Typography className={confirmationStyles.selectionTitle}>
            Escribe el nombre del invitado y pulsa Enter o el botón de la derecha
          </Typography>

        <Grid container>
          <Grid item xs={10}>         
            <TextField
            inputRef={textBoxRef}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                add(e, e.target.value);
              }
            }}
            label="Nombre..."
            fullWidth
          /></Grid>
          <Grid item xs={2} display={'flex'}>
            <Button fullWidth onClick={(e) => add(e, textBoxRef.current?.value)}>
              <PersonAddIcon />
            </Button>
          </Grid>
        </Grid>
        </Box>
        <Box className={confirmationStyles.floatingNumber}>{index}</Box>
      </Box>
    </Grid>
  );
};

export default Guests;
