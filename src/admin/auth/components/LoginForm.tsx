import { login } from '../actions';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../slice';
import styles from '../styles/login.module.scss';
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

const LoginForm = ({ setForgotPassword }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [openError, setOpenError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatcher = useDispatch();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await login(user, password, "testDevice");
    setIsLoading(false);
    if (res?.status === 200) {
      global?.window?.localStorage.setItem("user", JSON.stringify(res.data));
      global?.window?.localStorage.setItem("token", res.data.token);
      global?.window?.localStorage.setItem(
        "role",
        JSON.stringify(res.data.role),
      );
      dispatcher(loginSuccess(res.data));
    } else if (res?.response.status === 400) {
      setOpenError(true);
    }
  };

  return (
    <Box className={styles.loginScreen}>
      <form onSubmit={submit}>
        <Typography variant={'h5'} fontWeight={'bold'} marginBottom={3}>
          Iniciar sesión
        </Typography>
        <Divider sx={{ marginBottom: 3 }} />
        <TextField
          onChange={(e) => setUser(e.target.value)}
          label={'Correo o username'}
        />
        <br />
        <TextField
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          label={'Contraseña'}
        />
        <Snackbar
          open={openError}
          autoHideDuration={6000}
          message="Usuario o contraseña incorrectos"
        />
        {isLoading ? (
          <Box paddingTop={3}>
            <CircularProgress
              sx={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
            />
          </Box>
        ) : (
          <>
            <Button
              type="submit"
              color={'primary'}
              variant="contained"
              className={styles.submitButton}
            >
              Iniciar sesión
            </Button>
            {/* <Button onClick={() => setForgotPassword(true)}>
              ¿Olvidaste tu contraseña?
            </Button> */}
          </>
        )}
      </form>
    </Box>
  );
};

export default LoginForm;
