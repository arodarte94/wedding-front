'use client';
import React, { useState } from 'react'
import { login } from './actions';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../auth/slice';
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate()
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const dispatcher = useDispatch();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await login(user, password, 'testDevice');

    if(res.status === 200) {

      global?.window?.localStorage.setItem('user', JSON.stringify(res.data));
      dispatcher(loginSuccess(res.data));
      navigate('/admin')
    }
  }

  return (
    <form onSubmit={submit}>
      <input type="text" onChange={(e) => setUser(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Login