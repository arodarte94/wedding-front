import { Group } from "../../models/group.model";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import styles from "../../styles/app.module.scss";
import { create, update } from "../actions";
import TabOptions from "../../components/edit-view/TabOptions";
import RestaurantIcon from "@mui/icons-material/Restaurant";

const MainTab = ({ group, set }: { group: Group | null; set: any }) => {
  const [groupData, setGroupData] = useState({
    name: group?.name,
    capacity: group?.capacity,
  });

  const save = async () => {
    const res = group
      ? await update(group?.id, groupData.name, groupData.capacity)
      : await create(groupData.name, groupData.capacity);

    if (res.status === 200) set(res.data.group);
  };

  return (
    <>
      <TabOptions save={save} link="/admin/groups" />
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
            onChange={(e) =>
              setGroupData({ ...groupData, name: e.target.value })
            }
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
            onChange={(e) =>
              setGroupData({ ...groupData, capacity: e.target.value })
            }
            variant="filled"
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} className={styles.tabContent}>
        <Grid item lg={3} md={6} xs={12}>
          <Card>
            <CardMedia
              sx={{ height: 140 }}
              image="https://1.bp.blogspot.com/-_KJEdOO6wfE/V2GvfG95UpI/AAAAAAAAIWQ/dxmJ6T7i3d0etDH9V6V5SBKXr7FHG8eFQCLcB/s1600/IMG_0210.jpg"
            />
            <CardContent>
              <h3>Ensaladita olimpia</h3>
              <Typography>
                <RestaurantIcon sx={{ fontSize: 15 }} /> Cantidad solicitada: 0
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item lg={3} md={6} xs={12}>
          <Card>
            <CardMedia
              sx={{ height: 140 }}
              image="https://blog.renaware.com/wp-content/uploads/2016/09/Tacos-de-camaron-featured.png"
            />
            <CardContent>
              <h3>Takitos de jicama</h3>
              <Typography>
                <RestaurantIcon sx={{ fontSize: 15 }} /> Cantidad solicitada: 0
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item lg={3} md={6} xs={12}>
          <Card>
            <CardMedia
              sx={{ height: 140 }}
              image="https://www.unileverfoodsolutions.com.mx/dam/global-ufs/mcos/NOLA/calcmenu/recipes/MX-recipes/red-meats-&-red-meat-dishes/chile-en-nogada/main-header.jpg"
            />
            <CardContent>
              <h3>Chiles en nogada</h3>
              <Typography>
                <RestaurantIcon sx={{ fontSize: 15 }} /> Cantidad solicitada: 0
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <Card>
            <CardMedia
              sx={{ height: 140 }}
              image="https://montesesma.com/wp-content/uploads/2021/03/pollo-con-salsa-de-nueces.jpg"
            />
            <CardContent>
              <h3>Pollito en salsa de nuez</h3>
              <Typography>
                <RestaurantIcon sx={{ fontSize: 15 }} /> Cantidad solicitada: 0
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
export default MainTab;
