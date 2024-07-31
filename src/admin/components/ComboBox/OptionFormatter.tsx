import { Avatar, Badge, Box, Grid, Typography } from "@mui/material";
import comboboxStyles from "../../styles/combobox.module.scss";
import { ENV } from "../../../environment/environment";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import ScaleOutlinedIcon from "@mui/icons-material/ScaleOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const OptionFormatter = ({
  props,
  option,
  field,
  selected,
  customFormat,
}: {
  props: any;
  option: any;
  field: string;
  selected: any;
  customFormat?: string;
}) => {
  return (
    <>
      {customFormat === "user" && (
        <UserFormatter
          props={props}
          option={option}
          field={field}
          selected={selected}
        />
      )}
      {customFormat === "product" && (
        <ProductFormatter
          props={props}
          option={option}
          field={field}
          selected={selected}
        />
      )}
      {customFormat === "location" && (
        <LocationFormatter
          props={props}
          option={option}
          field={field}
          selected={selected}
        />
      )}
      {customFormat === "pricelist" && (
        <PricelistFormatter
          props={props}
          option={option}
          field={field}
          selected={selected}
        />
      )}
      {!customFormat && (
        <DefaultFormatter
          props={props}
          option={option}
          field={field}
          selected={selected}
        />
      )}
    </>
  );
};

export const ProductFormatter = ({ props, option, field, selected }) => {
  const image = option?.image ? ENV.imagePath + option?.image : "/noImage.png";

  return (
    <Grid
      container
      {...props}
      className={[
        comboboxStyles.option,
        comboboxStyles.product,
        selected ? comboboxStyles.selected : "",
      ].join(" ")}
    >
      <Grid item xs={2} className={comboboxStyles.optionImage}>
        <img src={image} width="100%" alt="" />
      </Grid>
      <Grid item xs={10} className={comboboxStyles.productInfo}>
        <Typography fontWeight={"bold"} fontSize={14}>
          {option[field] ?? option.name}
        </Typography>
        <Box display={"flex"} flexDirection={"row"} gap={1.5}>
          <Typography
            variant={"caption"}
            className={comboboxStyles.additionalData}
          >
            <ClassOutlinedIcon /> {option?.category?.name}
          </Typography>
          <Typography
            variant={"caption"}
            className={comboboxStyles.additionalData}
          >
            <ScaleOutlinedIcon /> {option?.unit?.name}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export const UserFormatter = ({ props, option, field, selected }) => {
  const image = option?.image ? ENV.imagePath + option?.image : "/noImage.png";

  return (
    <Grid
      container
      {...props}
      className={[
        comboboxStyles.option,
        comboboxStyles.product,
        selected ? comboboxStyles.selected : "",
      ].join(" ")}
    >
      <Grid item xs={2} className={comboboxStyles.optionImage}>
        <img src={image} width="100%" alt="" />
      </Grid>
      <Grid item xs={10} className={comboboxStyles.productInfo}>
        <Typography fontWeight={"bold"} fontSize={14}>
          {option[field] ?? option.name}
        </Typography>
        <Box display={"flex"} flexDirection={"row"} gap={1.5}>
          <Typography
            variant={"caption"}
            className={comboboxStyles.additionalData}
          >
            <EmailOutlinedIcon /> {option?.email}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export const LocationFormatter = ({ props, option, field, selected }) => {
  return (
    <Grid
      container
      {...props}
      className={[
        comboboxStyles.option,
        selected ? comboboxStyles.selected : "",
      ].join(" ")}
    >
      <Grid item xs={12}>
        <Typography fontWeight={"bold"}>
          {option[field] ?? option.name}{" "}
          {option?.warehouse && (
            <Badge
              color="success"
              badgeContent="Almacén"
              sx={{ marginLeft: 4 }}
            />
          )}
        </Typography>
        <Box display={"flex"} flexDirection={"row"} gap={1.5}>
          <Typography
            variant={"caption"}
            className={comboboxStyles.additionalData}
          >
            <LocationOnOutlinedIcon /> {option?.address}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export const PricelistFormatter = ({ props, option, field, selected }) => {
  const image = option.is_usd ? "/usFlagIcon.png" : "/mxFlagIcon.png";

  return (
    <Grid
      container
      {...props}
      className={[
        comboboxStyles.option,
        selected ? comboboxStyles.selected : "",
      ].join(" ")}
    >
      <Grid item xs={12}>
        <Typography fontWeight={"bold"}>
          {option[field] ?? option.name}{" "}
          <Badge
            color={option.is_purchasing ? "info" : "success"}
            badgeContent={option.is_purchasing ? "Compras" : "Ventas"}
            sx={{ marginLeft: 4 }}
          />
        </Typography>
        <Box display={"flex"} flexDirection={"row"} gap={1.5}>
          <Typography
            variant={"caption"}
            className={comboboxStyles.additionalData}
          >
            <Avatar
              alt={option.is_usd ? "USD" : "MXN"}
              src={image}
              sx={{ width: 24, height: 24, marginRight: 0.75 }}
            />
            {option.is_usd ? "USD" : "MXN"}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

const DefaultFormatter = ({ props, option, field, selected }) => {
  return (
    <li
      {...props}
      className={[
        comboboxStyles.option,
        selected ? comboboxStyles.selected : "",
      ].join(" ")}
    >
      {option[field] ?? option.name}
    </li>
  );
};

export default OptionFormatter;