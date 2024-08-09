import { Divider, Grid, TextField } from "@mui/material";
import { useState } from "react";
import styles from "../../styles/app.module.scss";
import TabOptions from "../../components/edit-view/TabOptions";
import { User } from "../../models/user.model";
import { create, update } from "../actions";
import LoadingBackdrop from "../../components/layout/loadingBackdrop";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import GroupsCombobox from "../../components/ComboBox/GroupsCombobox";
import EntreesCombobox from "../../components/ComboBox/EntreesCombobox";
import DinnersCombobox from "../../components/ComboBox/DinnersCombobox";
import UsersTypesCombobox from "../../components/ComboBox/UsersTypesCombobox";
import UsersCombobox from "../../components/ComboBox/UsersCombobox";
const MainTab = ({ user, set }: { user: User | null; set: any }) => {
  const appState = useSelector((state: RootState) => state.app);
  const [userData, setUserData] = useState({
    name: user?.name,
    username: user?.username,
    email: user?.email,
    slots: user?.slots,
    host: user?.host?.id,
    group: user?.group?.id,
    role: user?.role?.id,
    type: user?.type?.id,
    entree: user?.entree?.id,
    dinner: user?.dinner?.id,
  });

  const save = async () => {
    const res = user
      ? await update(
          user?.id,
          userData.name,
          userData.username,
          userData.email,
          userData.role,
          userData.host,
          userData.type,
          userData.group,
          userData.entree,
          userData.dinner,
          userData.slots,
        )
      : await create(
          userData.name,
          userData.username,
          userData.email,
          userData.role,
          userData.host,
          userData.type,
          userData.group,
          userData.entree,
          userData.dinner,
          userData.slots,
        );

    if (res.status === 200) set(res.data.user);
  };

  return (
    <>
      <TabOptions save={save} link="/admin/users" />
      <Grid container spacing={2} className={styles.tabContent}>
        {appState.isLoading && <LoadingBackdrop />}
        <Grid item xl={12} lg={12} xs={12}>
          <Grid container marginBottom={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                required
                label="Nombre del invitado"
                defaultValue={user?.name}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <UsersTypesCombobox
                data={userData}
                set={setUserData}
                initialValue={user?.type ?? undefined}
              />
            </Grid>
          </Grid>

          <Divider />

          <Grid container marginTop={3} marginBottom={3}>
            {userData?.type == 2 ? (
              <>
                <Grid item xs={12}>
                  <GroupsCombobox
                    data={userData}
                    set={setUserData}
                    initialValue={user?.group ?? undefined}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    required
                    label="Correo del invitado"
                    defaultValue={user?.email}
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    required
                    type="number"
                    label="Acompañantes disponibles"
                    defaultValue={user?.slots}
                    onChange={(e) =>
                      setUserData({ ...userData, slots: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12} marginTop={3}>
                  <TextField
                    fullWidth
                    disabled
                    type="text"
                    label="Liga de confirmación"
                    defaultValue={user?.link}
                  />
                </Grid>
              </>
            ) : (
              <Grid item xs={12}>
                <UsersCombobox
                  field="host"
                  data={userData}
                  set={setUserData}
                  type={1}
                  initialValue={user?.host ?? undefined}
                />
              </Grid>
            )}
          </Grid>

          <Divider />
          <Grid container marginTop={3}>
            <Grid item md={6} xs={12}>
              <EntreesCombobox
                data={userData}
                set={setUserData}
                initialValue={user?.entree ?? undefined}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <DinnersCombobox
                data={userData}
                set={setUserData}
                initialValue={user?.dinner ?? undefined}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default MainTab;
