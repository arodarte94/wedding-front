import React, { useRef, useState } from "react";
import styles from "../styles/front.module.scss";
import confirmationStyles from "../styles/confirmation.module.scss";
import { Box, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const WeddingConfirmation = () => {
  const [code, setCode] = useState(Array(5).fill("")); // Initialize state for the code
  const refs = useRef([]);

  const handleInputChange = (e, index) => {
    const newValue = e.target.value;

    // Update the state with the new value at the correct index
    const newCode = [...code];
    newCode[index] = newValue;
    setCode(newCode);

    if (newValue.length === 1 && index < refs.current.length - 1) {
      refs.current[index + 1].focus();
    }

    if (index === refs.current.length - 1) {
      // Trigger the function when the last input field is filled
      handleSubmit(newCode);
    }
  };

  const handleSubmit = (finalCode) => {
    if (finalCode.every((char) => char !== "")) {
      console.log("Code entered:", finalCode.join(""));
      // Add your logic here (e.g., submit the code)
    } else {
      console.log("Please complete all fields.");
      // Optionally, provide user feedback for incomplete code entry
    }
  };

  return (
    <Box className={styles.main}>
      <Box className={styles.sideMenu}>
        <Box className={styles.menuTitle}>
          <Link to="/">
            <Button className={styles.mainConfirm} variant="outlined">
              REGRESAR
            </Button>
          </Link>
        </Box>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/#us">Nosotros</Link>
          </li>
          <li>
            <Link to="/#event">Evento</Link>
          </li>
          <li>
            <Link to="/#rsvp">RSVP</Link>
          </li>
          <li>
            <Link to="/#gifts">Regalos</Link>
          </li>
        </ul>
      </Box>

      <Box className={styles.content}>
        <Box className={confirmationStyles.confirmationCode}>
          {code.map((value, index) => (
            <TextField
              key={index}
              value={value}
              inputRef={(el) => (refs.current[index] = el)}
              onChange={(e) => handleInputChange(e, index)}
              inputProps={{ maxLength: 1, style: { textAlign: 'center' } }}
              className={confirmationStyles.confirmationCodeInput}
              sx={{
                input: {
                    backgroundColor: '#f6f3ed',
                    fontFamily: 'chapaza',
                    color: ''
                }
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default WeddingConfirmation;
