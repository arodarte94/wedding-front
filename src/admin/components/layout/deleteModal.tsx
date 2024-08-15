import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import LoadingBackdrop from "./loadingBackdrop";

interface deleteModalProps {
  open: boolean;
  close: any;
  deleteElements: any;
  isLoading?: boolean;
  children?: React.ReactNode;
  cancelLabels?: boolean;
  customTitle?: string;
}

const DeleteModal = ({
  open,
  close,
  deleteElements,
  isLoading,
  children,
  cancelLabels,
  customTitle,
}: deleteModalProps) => {
  return (
    <Dialog
      open={open}
      onClose={close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {isLoading && <LoadingBackdrop />}
      <DialogTitle id="alert-dialog-title">
        {customTitle
          ? customTitle
          : cancelLabels
            ? "Cancelar"
            : "Eliminar elementos"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {children}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={close} autoFocus variant="outlined">
          Regresar
        </Button>
        <Button onClick={deleteElements} variant="outlined" color="error">
          {cancelLabels ? "Cancelar" : "Eliminar"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteModal;
