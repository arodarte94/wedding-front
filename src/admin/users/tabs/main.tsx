import { Autocomplete, Box, Grid, TextField } from "@mui/material";
import { useState } from "react";
import styles from "../../styles/app.module.scss";
import TabOptions from "../../components/edit-view/TabOptions";
import { User } from "../../models/user.model";
import { create, getHosts, update } from "../actions";
import ComboBox from "../../components/inputs/ComboBox";
import { getGroups } from "../../groups/actions";
const MainTab = ({ user, set }: { user: User | null; set: any }) => {
  
  const types = [
    {id: 1, label: "Principal"},
    {id: 2, label: "Acompañante"},
    {id: 3, label: "Niño acompañante"},
  ];

  const dinners = [
    {id: 1, label: "Chile en nogada"},
    {id: 2, label: "Pizzita"},
  ];

  const [userData, setUserData] = useState({
    name: user?.name,
    username: user?.username,
    email: user?.email,
    slots: user?.slots,
    host: user?.host?.id,
    group: user?.group?.id,
    role: user?.role?.id,
    type: user?.type_id,
    dinner: user?.dinner_id
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
          userData.dinner,
          userData.slots
        )
      : await create(
          userData.name,
          userData.username,
          userData.email,
          userData.role,
          userData.host,
          userData.type,
          userData.group,
          userData.dinner,
          userData.slots
        );

    if (res.status === 200) set(res.data.user);
  };

  return (
    <>
      <TabOptions save={save} link="/admin/users" />
      <Grid container spacing={2} className={styles.tabContent}>
        <Grid item xl={12} lg={12} xs={12}>
          <Grid container>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                required
                label="Nombre del invitado"
                defaultValue={user?.name}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
                variant="filled"
              />
            </Grid>
            <Grid item md={6} xs={12}>
            <Autocomplete
            options={types}
            onChange={(e, val) => setUserData({...userData, type: val?.id})}
            value={userData?.type && types.find(i => i.id == userData.type)?.label}
            renderInput={(params) => <TextField label="Tipo de usuario..." variant="filled" {...params}
            />}
            />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                required
                label="Correo del invitado"
                variant="filled"
                defaultValue={user?.email}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
            </Grid>
            <Grid item md={6} xs={12}>
            {
              userData?.type == 1 ?
              <TextField
              fullWidth
              required
              type="number"
              label="Acompañantes disponibles"
              defaultValue={user?.slots}
              onChange={(e) => setUserData({...userData, slots: e.target.value})}
              variant="filled"
            />:
              <ComboBox
              src={getHosts}
              async
              required
              field="name"
              fieldKey="host"
              responseProperty="users"
              label="Responsable..."
              initialValue={user?.host}
              set={(newValue: any) => setUserData({...userData, host: newValue})}
              ></ComboBox>
            }
            </Grid>
            <Grid item md={6} xs={12}>
            { !userData?.host && <ComboBox
            src={() => getGroups(1, 1000, null, null)}
            async
            required
            field="name"
            fieldKey="group"
            responseProperty="groups"
            label="Grupo..."
            initialValue={user?.group}
            set={(newValue: any) => setUserData({...userData, group: newValue})}
              ></ComboBox> }
            </Grid>
            <Grid item md={6} xs={12}>
            <Autocomplete
            options={dinners}
            onChange={(e, val) => setUserData({...userData, dinner: val?.id})}
            value={userData?.dinner && dinners.find(i => i.id == userData.dinner)?.label}
            renderInput={(params) => <TextField label="Cenita..." variant="filled" {...params}
            />}
            />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default MainTab;
