import React, { useState } from 'react'
import { login } from './actions';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../auth/slice';
import { useNavigate } from "react-router-dom";
import styles from "../styles/login.module.scss";
import { Button } from '@mui/material';

const Login = () => {

  const navigate = useNavigate()
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const dispatcher = useDispatch();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await login(user, password, 'testDevice');

    if(res?.status === 200) {
      console.log(res.data);
      global?.window?.localStorage.setItem('user', JSON.stringify(res.data));
      global?.window?.localStorage.setItem('token', res.data.token);
      global?.window?.localStorage.setItem('role', JSON.stringify(res.data.role));
      dispatcher(loginSuccess(res.data));
      navigate('/admin')
    }

    else if(res?.response.status === 400)
    {
      console.log("cuantrotumblus")
    }
  }

  return (
    <div className={styles.loginScreen}>
      <form onSubmit={submit}>
        <h1>Iniciar sesión</h1>
        <hr />
        <label htmlFor="">Nombre de usuario o correo</label>
      <input type="text" onChange={(e) => setUser(e.target.value)} />

      <label htmlFor="">Contraseña</label>
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <Button variant='contained' type='submit' className={styles.submitButton}>Iniciar sesión</Button>
    </form>
    </div>

  )
}

export default Login