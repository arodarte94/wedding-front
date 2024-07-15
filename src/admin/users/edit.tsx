import AppLayout from "../components/layout/appLayout";
import { Grid } from "@mui/material";
import styles from "../styles/app.module.scss";
import Tab from "../components/edit-view/Tab";
import ResponsiveTabs from "../components/edit-view/Tabs";
import { useEffect, useState } from "react";
import Breadcrumb from "../components/edit-view/Breadcrumb";
import MainTab from "./tabs/main";
import { User } from "../models/user.model";
import UsersTab from "./tabs/users";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setIsPageLoading } from "../lib/appSlice";
import { getUser } from "./actions";
import DefaultEditView from "../components/layout/defaultEditView";

const tabs = [{ name: "General" }, { name: "Acompañantes" }];

const UserEditView = () => {
  const [value, setValue] = useState(0);
  const [user, setUser] = useState<User | null>(null);
  const { id } = useParams();
  const dispatcher = useDispatch();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    if (id) {
      dispatcher(setIsPageLoading(true));
      await getUser(id, setUser);
      dispatcher(setIsPageLoading(false));
    }
  };

  return (
    <AppLayout>
      <DefaultEditView
        link={"/admin/users"}
        title={"Invitados"}
        newLabel={"Nuevo invitado"}
        createdAt={user?.created_at}
        name={user?.name}
      >
        <Grid container className={styles.mainItem}>
          <Grid xl={1.5} lg={2} md={3} xs={12}>
            <ResponsiveTabs
              value={value}
              setNewValue={setValue}
              tabs={tabs}
            ></ResponsiveTabs>
          </Grid>
          <Grid
            xl={10.5}
            lg={10}
            md={9}
            xs={12}
            className={styles.scrollableTab}
          >
            <Tab value={value} index={0}>
              <MainTab user={user} set={setUser} key={user?.id} />
            </Tab>
            {user && (
              <Tab value={value} index={1}>
                <UsersTab user={user} key={user?.id + "Guests"} />
              </Tab>
            )}
          </Grid>
        </Grid>
      </DefaultEditView>
    </AppLayout>
  );
};
export default UserEditView;
