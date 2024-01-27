
import AppLayout from "../../components/layout/appLayout";
import { Grid } from "@mui/material";
import styles from "../../styles/app.module.scss";
import Tab from "../../components/edit-view/Tab";
import ResponsiveTabs from "../../components/edit-view/Tabs";
import { useState } from "react";
import Breadcrumb from "../../components/edit-view/Breadcrumb";
import MainTab from "../tabs/main";
import { User } from "../../models/user.model";
import UsersTab from "../tabs/users";

const tabs = [{ name: "General" }, { name: "Acompañantes" }];

const UserEditView = ({ user, set }: {user: User|null, set: any}) => {

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
           <Breadcrumb link='/admin/users' name='Invitados' element={user?.name}/> 
        </Grid>
        <Grid xs={8} marginTop={1} marginBottom={1}>
          <b className={styles.fs15}>{user?.name ?? "Nuevo invitado"}</b>
          <i>&nbsp; {user?.createdAt ? "- Creado el" + user.createdAt : ""}</i>
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
              <MainTab user={user} set={set} key={user?.id} />
            </Tab>

            {user && <Tab value={value} index={1}>
              <UsersTab user={user} key={user?.id + 'Guests'} />
            </Tab>}

          </Grid>
        </Grid>
      </Grid>
    </AppLayout>
  );
};
export default UserEditView;
