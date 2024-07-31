import { sendResetPasswordLink } from "../actions";
import styles from "../styles/login.module.scss";
import {
  Box,
  Button,
  CircularProgress,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const ForgotPassword = ({ setForgotPassword }) => {
  const [email, setEmail] = useState(null);
  const [openError, setOpenError] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await sendResetPasswordLink(email);
    setIsLoading(false);
    if (res?.status === 200) {
      setOpenSuccess(true);
      setEmail(null);
    } else if (res?.response.status === 400) {
      setOpenError(true);
    }
  };

  return (
    <Box className={styles.loginScreen}>
      <form onSubmit={submit}>
        <Typography variant={"h6"} marginBottom={3}>
          Enviar correo de recuperación
        </Typography>
        <Typography textAlign={"justify"} variant={"caption"} marginBottom={3}>
          Sigue las instrucciones del correo que llegará a tu bandeja para
          continuar con el proceso de reestablecimiento de contraseña. ¡Revisa
          también tu bandeja de spam por si las dudas!
        </Typography>

        <TextField
          onChange={(e) => setEmail(e.target.value)}
          label={"Correo"}
        />
        <br />
        <Snackbar
          open={openError}
          autoHideDuration={6000}
          message="Email no encontrado"
        />
        <Snackbar
          open={openSuccess}
          autoHideDuration={6000}
          message="Correo de recuperación enviado con éxito, revisa tu bandeja de entrada y spam."
        />
        {isLoading ? (
          <Box paddingTop={3}>
            <CircularProgress
              sx={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
            />
          </Box>
        ) : (
          <>
            <Button
              type="submit"
              color={"primary"}
              variant="contained"
              className={styles.submitButton}
            >
              Enviar correo
            </Button>
            <Button onClick={() => setForgotPassword(false)}>
              Regresar a inicio de sesión
            </Button>
          </>
        )}
      </form>
    </Box>
  );
};

export default ForgotPassword;
