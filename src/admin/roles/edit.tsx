import AppLayout from "../components/layout/appLayout";
import { Grid } from "@mui/material";
import styles from "../styles/app.module.scss";
import Tab from "../components/edit-view/Tab";
import { Role } from "../models/role.model";
import ResponsiveTabs from "../components/edit-view/Tabs";
import { useEffect, useState } from "react";
import Breadcrumb from "../components/edit-view/Breadcrumb";
import MainTab from "./tabs/main";
import UsersTab from "./tabs/users";
import { useParams } from "react-router-dom";
import { getRole } from "./actions";
import { PermissionModule } from "../models/permission.model";
import { getPermissions } from "./actions";
import { useDispatch } from "react-redux";
import { setIsLoading } from "../lib/appSlice";

const tabs = [{ name: "General" }, { name: "Usuarios" }];

const RoleEditView = () => {
  const [value, setValue] = useState(0);
  const [allPermissions, setAllPermissions] = useState<
    PermissionModule[] | null
  >(null);
  const [role, setRole] = useState<Role | null>(null);
  const { id } = useParams();
  const dispatcher = useDispatch();

  useEffect(() => {
    if (id) {
      dispatcher(setIsLoading(true));
      getRole(id, setRole);
    }

    getPermissions(setAllPermissions);
  }, []);

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
          <Breadcrumb link="/roles" name="Roles" element={role?.name} />
        </Grid>
        <Grid xs={8} marginTop={1} marginBottom={1}>
          <b className={styles.fs15}>{role?.name ?? "Nuevo rol"}</b>
          <i>&nbsp; {role?.createdAt ? "- Creado el" + role.createdAt : ""}</i>
        </Grid>
        <Grid container className={styles.mainItem}>
          <Grid xl={1} lg={2} md={3} xs={12}>
            <ResponsiveTabs
              value={value}
              setNewValue={setValue}
              tabs={tabs}
            ></ResponsiveTabs>
          </Grid>
          <Grid xl={11} lg={10} md={9} xs={12} className={styles.scrollableTab}>
            <Tab value={value} index={0}>
              <MainTab
                role={role}
                set={setRole}
                key={role?.id}
                allPermissions={allPermissions}
              />
            </Tab>
            {role && (
              <Tab value={value} index={1}>
                <UsersTab role={role} key={role?.id + "Users"} />
              </Tab>
            )}
          </Grid>
        </Grid>
      </Grid>
    </AppLayout>
  );
};
export default RoleEditView;
