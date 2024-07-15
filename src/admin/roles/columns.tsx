import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import {
  createdAtColumn,
  idColumn,
  nameColumn,
  updatedAtColumn,
} from "../lib/defaultTableColumns";
import { Link } from "react-router-dom";

// Define the columns array
const columns: GridColDef[] = [
  idColumn,
  {
    field: "name",
    headerName: "Nombre",
    width: 300,
    renderCell: (params: GridRenderCellParams<any, Date>) => (
      <Link to={"/roles/" + params.row.id}>{params.row.name}</Link>
    ),
  },
  { field: "description", headerName: "Descripción", width: 200 },
  { field: "users_count", headerName: "Usuarios", width: 100 },
  createdAtColumn,
  updatedAtColumn,
];

// Add the filterable property to all objects in the array
columns.forEach((obj) => {
  obj.filterable = false;
});

export { columns };
