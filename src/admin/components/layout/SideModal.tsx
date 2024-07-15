import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  styled,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";

const SideDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    position: "fixed",
    right: "0",
    top: "0",
    margin: "0",
    width: "450px",
    height: "100vh",
    maxHeight: "100vh",
    borderRadius: "0",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const SideModal = ({
  open,
  close,
  save,
  title,
  children,
  customLabel,
}: {
  open: boolean;
  close: any;
  save: any;
  title: string;
  children?: React.ReactNode;
  customLabel?: string;
}) => {
  return (
    <SideDialog
      open={open}
      onClose={() => close()}
      TransitionComponent={Transition}
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText
          id="alert-dialog-description"
          key={"dialogContent"}
          sx={{ paddingTop: 1.5 }}
        >
          {children}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => close()} autoFocus variant="outlined">
          Regresar
        </Button>
        <Button onClick={save} variant="outlined" color="success">
          {customLabel ? customLabel : "Continuar"}
        </Button>
      </DialogActions>
    </SideDialog>
  );
};

export default SideModal;
