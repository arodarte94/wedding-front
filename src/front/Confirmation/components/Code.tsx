import { useEffect, useRef, useState } from "react";
import styles from "../../styles/front.module.scss";
import confirmationStyles from "../../styles/confirmation.module.scss";
import {
  Alert,
  Box,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { getUserByCode } from "../../../admin/users/actions";
import MobileMenu from "./MobileMenu";
import SideMenu from "./SideMenu";

const GuestCode = ({ id, loading, setLoading, guest, setGuest }) => {
  const [code, setCode] = useState(Array(5).fill("")); // Initialize state for the code
  const refs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    resize();
  }, [window.screen.width]);

  useEffect(() => {
    if (id) {
      fetchGuest(id);
    }
  }, []);

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
  const fetchGuest = async (code: string) => {
    setLoading(true);
    const response = await getUserByCode(code, setGuest);
    setLoading(false);
  };

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
      fetchGuest(newCode.join(""));
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && code[index] === "") {
      if (index > 0) {
        refs.current[index - 1]?.focus();
      }
    }
  };

  return (
    <Box className={styles.main}>
      <MobileMenu />
      <SideMenu />
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

          {loading === true ? (
            <>
              <Alert
                variant="filled"
                severity="warning"
                sx={{
                  margin: 1,
                  padding: 2,
                  borderRadius: 2,
                  backgroundColor: "#f6f3ed",
                }}
                icon={false}
              >
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={3}
                >
                  <CircularProgress sx={{ color: "#7c8274" }} />
                  <Typography
                    fontFamily={"chapaza"}
                    fontSize={18}
                    color={"#7c8274"}
                  >
                    Buscando invitado...
                  </Typography>
                </Box>
              </Alert>
            </>
          ) : (
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
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default GuestCode;
