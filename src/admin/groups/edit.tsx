
import AppLayout from "../components/layout/appLayout";
import { Grid } from "@mui/material";
import styles from "../styles/app.module.scss";
import Tab from "../components/edit-view/Tab";
import { Group } from "../models/group.model";
import ResponsiveTabs from "../components/edit-view/Tabs";
import { useState } from "react";
import Breadcrumb from "../components/edit-view/Breadcrumb";
import MainTab from "./tabs/main";
import UsersTab from "./tabs/users";

const tabs = [{ name: "General" }, { name: "Usuarios" }];

const GroupEditView = ({ group, set }: {group: Group|null, set: any}) => {

  const [value, setValue] = useState(0);

  return (
    <AppLayout>
      <Grid container spacing={2} className={styles.editView}>
      <Grid
          xs={12}
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
           <Breadcrumb link='/admin/groups' name='Grupos' element={group?.name}/> 
        </Grid>
        <Grid xs={8} marginTop={1} marginBottom={1}>
          <b className={styles.fs15}>{group?.name ?? "Nuevo grupo"}</b>
          <i>&nbsp; {group?.users.length ? " - " + group?.users.length + " invitados en este grupo" : ""}</i>
          <i>&nbsp; {group?.createdAt ? "- Creado el" + group.createdAt : ""}</i>
        </Grid>
        <Grid container className={styles.mainItem}>
          <Grid  xl={1} lg={2} md={3} xs={12}>
            <ResponsiveTabs
              value={value}
              setNewValue={setValue}
              tabs={tabs}
            ></ResponsiveTabs>
          </Grid>
          <Grid xl={11} lg={10} md={9} xs={12} className={styles.scrollableTab}>
            <Tab value={value} index={0}>
              <MainTab group={group} set={set} key={group?.id} />
            </Tab>
            {group && <Tab value={value} index={1}>
              <UsersTab group={group} key={group?.id + 'Groups'} />
            </Tab>}
          </Grid>
        </Grid>
      </Grid>
    </AppLayout>
  );
};
export default GroupEditView;
