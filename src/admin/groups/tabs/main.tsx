import { Group } from "../../models/group.model";
import { Grid, TextField } from "@mui/material";
import { useState } from "react";
import styles from "../../styles/app.module.scss";
import { create, update } from "../actions";
import TabOptions from "../../components/edit-view/TabOptions";
const MainTab = ({ group, set }: { group: Group | null, set: any }) => {

  const [groupData, setGroupData] = useState(
    {
      name: group?.name,
      capacity: group?.capacity,
    }
  );

  const save = async () => {
    
    const res = group? await update(group?.id, groupData.name, groupData.capacity) : 
    await create(groupData.name, groupData.capacity);

    if(res.status === 200)
      set(res.data.group);
  }

  return (
    <>

    <TabOptions save={save} link='/admin/groups'/>
      <Grid container spacing={2} className={styles.tabContent}>
        <Grid item md={6} xs={12}>
          <TextField
            fullWidth
            required
            label="Nombre"
            defaultValue={group?.name}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setGroupData({...groupData, name: e.target.value})}
            variant="filled"
          />
        </Grid>
        <Grid item md={6} xs={12}>
          
          <TextField
            fullWidth
            required
            type="number"
            label="Capacidad"
            defaultValue={group?.capacity}
            onChange={(e) => setGroupData({...groupData, capacity: e.target.value})}
            variant="filled"
          />
        </Grid>
      </Grid>
    </>
  );
};
export default MainTab;
