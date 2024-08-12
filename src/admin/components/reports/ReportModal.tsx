import { Checkbox, Divider, FormControlLabel, Grid } from "@mui/material";
import SideModal from "../layout/SideModal";
import LoadingBackdrop from "../layout/loadingBackdrop";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { downloadFile } from "../../lib/helpers";
import {
  setIsLoading,
  showErrorMessage,
  showMessage,
} from "../../lib/appSlice";
import { useState } from "react";

type ReportModalProps = {
  title: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  getReport: (params: any) => Promise<any>;
  locationsFilter?: boolean;
  productsFilter?: boolean;
  dateRangeFilter?: boolean;
  includeSoftDeleted?: string;
  options?: { name: string; key: string }[];
  dateRangeRequired?: boolean;
  locationsRequired?: boolean;
};

const ReportModal = ({
  title,
  open,
  setOpen,
  getReport,
  options,
  locationsRequired,
  dateRangeRequired,
}: ReportModalProps) => {
  const [reportParams, setReportParams] = useState({
    locations: null,
    products: null,
    startDate: null,
    endDate: null,
    includeSoftDeleted: "0",
  });
  const appState = useSelector((state: RootState) => state.app);
  const dispatcher = useDispatch();
  const generateReport = async () => {
    if (locationsRequired && !reportParams.locations) {
      dispatcher(showErrorMessage("Por favor seleccione una ubicación"));
      return;
    } else if (
      dateRangeRequired &&
      (!reportParams.startDate || !reportParams.endDate)
    ) {
      dispatcher(showErrorMessage("Por favor seleccione un rango de fechas"));
      return;
    }

    dispatcher(setIsLoading(true));
    const report = await getReport(reportParams);
    if (report.status === 200) {
      downloadFile(report.data, title);
      dispatcher(showMessage("Reporte ha sido descargado."));
    }
  };

  return (
    <SideModal
      title={title}
      open={open}
      close={() => setOpen(false)}
      save={generateReport}
    >
      {appState.isLoading && <LoadingBackdrop />}
      <Divider sx={{ marginBottom: 3 }} />
      <Grid container spacing={2}>
        <Divider sx={{ marginTop: 3, marginBottom: 3 }} />
        {options?.map((option) => {
          return (
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e, val) => {
                      if (val === true) {
                        setReportParams({
                          ...reportParams,
                          [option.key]: true,
                        });
                      } else {
                        const { [option.key]: _, ...rest } = reportParams;
                        setReportParams(rest);
                      }
                    }}
                  />
                }
                label={option.name}
              />
            </Grid>
          );
        })}
      </Grid>
    </SideModal>
  );
};
export default ReportModal;
