import { Grid } from "@mui/material";
import React from "react";
import Breadcrumb from "../edit-view/Breadcrumb";
import styles from "../../styles/app.module.scss";
import { formatDate } from "../../lib/helpers";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import PageLoader from "./PageLoader";

const DefaultEditView = ({
  title,
  link,
  newLabel,
  name,
  createdAt,
  children,
}: {
  title: string;
  link: string;
  newLabel: string;
  name?: string | undefined;
  createdAt?: Date | undefined;
  children: React.ReactNode;
}) => {
  const appState = useSelector((state: RootState) => state.app);

  return (
    <Grid container spacing={2} className={styles.editView}>
      {appState.isPageLoading ? (
        <PageLoader />
      ) : (
        <>
          <Grid
            xs={12}
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Breadcrumb link={link} name={title} element={name} />
          </Grid>
          <Grid xs={8} marginTop={1} marginBottom={1}>
            <b className={styles.hideOnMobile}>{name ?? newLabel}</b>
            <i>
              &nbsp; {createdAt ? "- Creado el " + formatDate(createdAt) : ""}
            </i>
          </Grid>
          {children}
        </>
      )}
    </Grid>
  );
};

export default DefaultEditView;
