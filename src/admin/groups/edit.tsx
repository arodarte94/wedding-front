
import AppLayout from "../components/layout/appLayout";
import { Grid } from "@mui/material";
import styles from "../styles/app.module.scss";
import Tab from "../components/edit-view/Tab";
import { Group } from "../models/group.model";
import ResponsiveTabs from "../components/edit-view/Tabs";
import { useEffect, useState } from "react";
import Breadcrumb from "../components/edit-view/Breadcrumb";
import MainTab from "./tabs/main";
import UsersTab from "./tabs/users";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsPageLoading } from "../lib/appSlice";
import { getGroup } from "./actions";
import DefaultEditView from "../components/layout/defaultEditView";

const tabs = [{ name: "General" }, { name: "Usuarios" }];

const GroupEditView = () => {

  const [value, setValue] = useState(0);
  const [group, setGroup] = useState<Group | null>(null);
  const { id } = useParams();
  const dispatcher = useDispatch();
  
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    if (id) {
      dispatcher(setIsPageLoading(true));
      await getGroup(id, setGroup);
      dispatcher(setIsPageLoading(false));
    }
  };

  return (
    <AppLayout>
      <DefaultEditView
        link={'/admin/groups'}
        title={'Mesas'}
        newLabel={'Nueva mesa'}
        createdAt={group?.created_at}
        name={group?.name}
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
              <MainTab group={group} set={setGroup} key={group?.id} />
            </Tab>
            {group && <Tab value={value} index={1}>
              <UsersTab group={group} key={group?.id + 'Groups'} />
            </Tab>}
          </Grid>
        </Grid>
      </DefaultEditView>
    </AppLayout>
  );
};
export default GroupEditView;
