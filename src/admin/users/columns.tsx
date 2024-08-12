import {
  GridCellParams,
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import {
  idColumn,
  transformDate,
  updatedAtColumn,
} from "../lib/defaultTableColumns";
import { Link } from "react-router-dom";
import styles from "../styles/tables.module.scss";
import { TextFilter } from "../components/tables/columnFilter";
import DateRangePicker from "../components/inputs/DateRangePicker";
import GroupsCombobox from "../components/ComboBox/GroupsCombobox";
import EntreesCombobox from "../components/ComboBox/EntreesCombobox";
import DinnersCombobox from "../components/ComboBox/DinnersCombobox";
import UsersTypesCombobox from "../components/ComboBox/UsersTypesCombobox";
import IsConfirmedCombobox from "../components/ComboBox/IsConfirmedCombobox";
export const columns: GridColDef[] = [
  idColumn,
  {
    field: "name",
    headerName: "Nombre",
    width: 300,
    filter: TextFilter,
    //  renderHeader: (params: GridColumnHeaderParams) => (
    //      <ColumnFilter title={'ID'} type={'text'} field={params.field}></ColumnFilter>
    //   )},
    renderCell: (params: GridRenderCellParams<any, Date>) => (
      <Link to={"/admin/users/" + params.row.id}>{params.row.name}</Link>
    ),
  },
  { 
    field: 'confirmed', 
    headerName: 'Asistirá', 
    width: 150, 
    filter: IsConfirmedCombobox,
    valueGetter: (params: GridValueGetterParams) => {
     
      if(params.row.confirmed === null) return "No respondido";

      else return (params.row.confirmed ? 'Sí' : "No");
    },
  },
  {
    field: "confirmed_at",
    headerName: "Fecha de respuesta",
    width: 200,
    filter: DateRangePicker,
    valueGetter: transformDate,
  },
  {
    field: "slots",
    headerName: "Extras asignados",
    width: 200,
    filter: TextFilter,
    valueGetter: (params: GridValueGetterParams) =>
      params.row?.slots === 0 ? "" : params.row.slots,
  },
  {
    field: "guests_count",
    headerName: "Extras utilizados",
    width: 200,
    filter: TextFilter,
    valueGetter: (params: GridValueGetterParams) =>
      params.row?.slots === 0 ? "" : params.row.guests_count,
  },
  {
    field: "type",
    headerName: "Tipo",
    width: 200,
    filter: UsersTypesCombobox,
    valueGetter: (params: GridValueGetterParams) => params.row.type?.name ?? "",
    cellClassName: (params: GridCellParams) => {
      if (params.row.type?.name === "Acompañante") return styles.guest;
      else if (params.row.type?.name === "Niño acompañante")
        return styles.guestChild;
    },
  },
  {
    field: "group",
    headerName: "Grupo",
    width: 200,
    filter: GroupsCombobox,
    valueGetter: (params: GridValueGetterParams) =>
      params.row.group?.name ?? "",
  },
  {
    field: "host",
    headerName: "Responsable",
    width: 200,
    filter: TextFilter,
    valueGetter: (params: GridValueGetterParams) => params.row.host?.name ?? "",
  },
  {
    field: "entree",
    headerName: "Entrada",
    width: 200,
    filter: EntreesCombobox,
    valueGetter: (params: GridValueGetterParams) =>
      params.row.entree?.name ?? "",
  },
  {
    field: "dinner",
    headerName: "Cena",
    width: 200,
    filter: DinnersCombobox,
    valueGetter: (params: GridValueGetterParams) =>
      params.row.dinner?.name ?? "",
  },
  updatedAtColumn,
];
