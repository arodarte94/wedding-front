import { Box, Grid, TextField } from "@mui/material";
import { useState } from "react";
import styles from "../../styles/app.module.scss";
import TabOptions from "../../components/edit-view/TabOptions";
import { User } from "../../models/user.model";
import { create, update } from "../actions";
import { getRoles } from "../../roles/actions";
import ComboBox from "../../components/inputs/ComboBox";
const MainTab = ({ user, set }: { user: User | null; set: any }) => {
  const [userData, setUserData] = useState({
    name: user?.name,
    username: user?.username,
    email: user?.email,
    role: user?.role?.id,
  });

  const save = async () => {
    const res = user
      ? await update(
          user?.id,
          userData.name,
          userData.username,
          userData.email,
          userData.role
        )
      : await create(
          userData.name,
          userData.username,
          userData.email,
          userData.role
        );

    if (res.status === 200) set(res.data.user);
  };

  return (
    <>
      <TabOptions save={save} link="/admin/users" />
      <Grid container spacing={2} className={styles.tabContent}>
        <Grid item xl={2} lg={3} xs={12}>
          <Box className={styles.editViewImage}>
            <img src="/defaultUser.jpg" alt="" />
          </Box>
        </Grid>
        <Grid item xl={10} lg={9} xs={12}>
          <Grid container>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                required
                label="Nombre"
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
              <TextField
                fullWidth
                required
                label="Nombre de usuario"
                variant="filled"
                defaultValue={user?.username}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) =>
                  setUserData({ ...userData, username: e.target.value })
                }
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                required
                label="Correo de usuario"
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
              <ComboBox
                src={getRoles}
                async
                labelKey="name"
                searchTerm="name"
                idKey="id"
                fieldKey="role"
                responseProperty="roles"
                data={userData}
                text={user?.role.name}
                set={setUserData}
              ></ComboBox>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default MainTab;
