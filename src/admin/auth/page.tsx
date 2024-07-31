import { useState } from "react";
import LoginForm from "./components/LoginForm";

const Login = () => {
  const [setShowForgotPassword] = useState(false);

  return (
    <>
      <LoginForm setForgotPassword={setShowForgotPassword} />
    </>
  );
};

export default Login;
