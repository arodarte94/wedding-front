import { Role } from "../../models/role.model";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import styles from "../../styles/app.module.scss";
import TabOptions from "../../components/edit-view/TabOptions";
import { PermissionModule } from "../../models/permission.model";
import { upsert } from "../actions";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import LoadingBackdrop from "../../components/layout/loadingBackdrop";

const MainTab = ({
  role,
  set,
  allPermissions,
}: {
  role: Role | null;
  set: any;
  allPermissions: PermissionModule[] | null;
}) => {
  const appState = useSelector((state: RootState) => state.app);
  const [roleData, setRoleData] = useState({
    name: role?.name,
    description: role?.description,
    permissions: role?.permissions.map((r) => r.id) ?? [],
  });

  const togglePermission = (
    event: React.ChangeEvent<HTMLInputElement>,
    permissionId: number,
  ) => {
    const newPermissions = event.target.checked
      ? [...roleData.permissions, permissionId]
      : roleData.permissions.filter((i) => i !== permissionId);
    setRoleData({ ...roleData, permissions: newPermissions });
  };

  const save = async () => {
    const res = await upsert(roleData, role?.id);
    if (res.status === 200) set(res.data.role);
  };

  return (
    <>
      <TabOptions save={save} link="/roles" />
      <Grid container spacing={2} className={styles.tabContent}>
        {appState.isLoading && <LoadingBackdrop />}
        <Grid item md={6} xs={12}>
          <TextField
            fullWidth
            required
            label="Nombre"
            defaultValue={role?.name}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setRoleData({ ...roleData, name: e.target.value })}
            variant="filled"
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField
            fullWidth
            required
            label="Descripción"
            defaultValue={role?.description}
            onChange={(e) =>
              setRoleData({ ...roleData, description: e.target.value })
            }
            variant="filled"
          />
        </Grid>
        <Grid container spacing={5} marginTop={2}>
          {allPermissions?.map((module, idx) => {
            return (
              <Grid item md={6} xs={12} key={idx}>
                <b>{module.name.toUpperCase()}</b>
                <FormGroup>
                  {module.permissions.map((permission, idx) => {
                    return (
                      <FormControlLabel
                        key={idx}
                        control={
                          <Checkbox
                            defaultChecked={
                              role &&
                              role.permissions.findIndex(
                                (p) => p.id == permission.id,
                              ) !== -1
                                ? true
                                : false
                            }
                            onChange={(e) => togglePermission(e, permission.id)}
                          />
                        }
                        label={permission.name}
                      />
                    );
                  })}
                </FormGroup>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};
export default MainTab;
