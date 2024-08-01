import { useEffect, useRef, useState } from "react";
import styles from "../styles/front.module.scss";
import confirmationStyles from "../styles/confirmation.module.scss";
import { Box, Button, TextField } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import SynagogueOutlinedIcon from "@mui/icons-material/SynagogueOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const WeddingConfirmation = () => {
  const [code, setCode] = useState(Array(5).fill("")); // Initialize state for the code
  const refs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    resize();

    if (id) {
    }
  }, [window.screen.width]);

  useEffect(() => {
    refs.current[0]?.focus();
  }, []);

  const resize = () => {
    if (window.innerWidth <= 900) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  window.onresize = resize;

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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && code[index] === '') {
      if (index > 0) {
        refs.current[index - 1]?.focus();
      }
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
      <div className={styles.bottomMenu}>
        <div className={styles.bottomMenuOption}>
          <Link to="/">
            <HomeOutlinedIcon />
            <span>Inicio</span>
          </Link>
        </div>
        <div className={styles.bottomMenuOption}>
          <Link to="/#us">
            <FavoriteBorderOutlinedIcon />
            <span>Nosotros</span>
          </Link>
        </div>
        <div className={styles.bottomMenuOption}>
          <Link to="/#event">
            <SynagogueOutlinedIcon />
            <span>Evento</span>
          </Link>
        </div>
        <div className={styles.bottomMenuOption}>
          <Link to="/#rsvp">
            <MarkEmailReadOutlinedIcon />
            <span>RSVP</span>
          </Link>
        </div>
        <div className={styles.bottomMenuOption}>
          <Link to="/#gifts">
            <CardGiftcardOutlinedIcon />
            <span>Regalos</span>
          </Link>
        </div>
      </div>
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
          {isMobile ? (
            <Box
              component={"img"}
              src="mainLabelMobile.png"
              alt=""
              className={confirmationStyles.mobileLabel}
            />
          ) : (
            <Box
              component={"img"}
              src="mainLabel.png"
              alt=""
              className={confirmationStyles.confirmationCodeImg}
            />
          )}

          <Box display={"flex"}>
            {code.map((value, index) => (
              <TextField
                key={index}
                value={value}
                inputRef={(el) => (refs.current[index] = el)}
                onChange={(e) => handleInputChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                inputProps={{ maxLength: 1, style: { textAlign: "center" } }}
                className={confirmationStyles.confirmationCodeInput}
                sx={{
                  input: {
                    backgroundColor: "#f6f3ed",
                    fontFamily: "chapaza",
                    color: "#7c8274",
                    fontWeight: 700,
                    fontSize: 30,
                    padding: 1.5,
                    textTransform: "uppercase",
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WeddingConfirmation;
